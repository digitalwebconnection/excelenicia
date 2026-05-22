import { useState, useEffect, useRef } from 'react';
import RichTextEditor from './RichTextEditor';
import { getBlog, createBlog, updateBlog } from './api';

export interface Blog {
  _id?: string;
  slug?: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    longContent: string;
    schema: string;
  };
}

const emptyForm = (): Blog => ({
  title: '', excerpt: '', categories: '', readTime: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  image: '', content: '',
  meta: { title: '', description: '', keywords: '', canonical: '', longContent: '', schema: '' }
});

const TABS = ['Blog Info', 'Content', 'Meta Tags'];

function slugify(text: string): string {
  return text.toString().toLowerCase().trim()
    .replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/-+/g, '-');
}

export default function BlogForm({ blogId, onSuccess, onCancel }: { blogId?: string; onSuccess: () => void; onCancel: () => void }) {
  const [form, setForm] = useState<Blog>(emptyForm());
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!blogId);
  const [error, setError] = useState('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!blogId) return;
    (async () => {
      try {
        const d = await getBlog(blogId);
        const defaults = emptyForm();
        setForm({
          ...defaults,
          ...d,
          meta: { ...defaults.meta, ...(d.meta || {}) }
        });
        if (d.image) setImgPreview(d.image);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setFetching(false);
      }
    })();
  }, [blogId]);

  const set = (path: string, value: any) => setForm(prev => {
    const next = structuredClone(prev) as any;
    const keys = path.split('.');
    let cur = next;
    for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
    cur[keys[keys.length - 1]] = value;
    return next;
  });

  const submit = async () => {
    setError('');
    setLoading(true);
    try {
      const fd = new FormData();
      const p = structuredClone(form) as any;

      if (imgFile) {
        fd.append('image', imgFile);
      }

      fd.append('data', JSON.stringify(p));

      // Append flat fields for backward compatibility with older backend (e.g. Render prod)
      fd.append('title', p.title || '');
      if (p.slug) fd.append('slug', p.slug);
      fd.append('excerpt', p.excerpt || '');
      fd.append('categories', p.categories || '');
      fd.append('readTime', p.readTime || '');
      fd.append('date', p.date || '');
      fd.append('content', p.content || '');
      fd.append('meta', JSON.stringify(p.meta || {}));

      if (blogId) {
        await updateBlog(blogId, fd);
      } else {
        await createBlog(fd);
      }
      onSuccess();
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return (
    <div className="flex items-center justify-center py-32 text-slate-400">
      <svg className="animate-spin mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <circle cx="12" cy="12" r="10" strokeOpacity=".2" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
      </svg> Loading…
    </div>
  );

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`shrink-0 px-5 py-3.5 text-sm font-medium transition border-b-2 ${tab === i ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}>
            {t}
          </button>
        ))}
      </div>

      {error && <div className="mx-6 mt-4 flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">{error}</div>}

      <div className="p-6 space-y-5">
        {/* Tab 0: Blog Info */}
        {tab === 0 && <>
          <SectionTitle>Blog Information</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Blog Title *" value={form.title} onChange={v => set('title', v)} placeholder="e.g. Top Universities in the UK 2026" />
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                URL Slug <span className="text-slate-500 font-normal">(auto-generated)</span>
              </label>
              <div className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2.5 flex items-center gap-1.5 text-sm overflow-hidden">
                <span className="text-slate-500 select-none shrink-0">/updates/blog/</span>
                <span className="text-amber-400 font-semibold truncate">
                  {form.title ? slugify(form.title) : 'your-blog-title'}
                </span>
              </div>
              {form.slug && (
                <p className="text-[11px] text-slate-500 mt-1">
                  Current saved slug: <strong className="text-slate-400">{form.slug}</strong>
                </p>
              )}
            </div>
            <Field label="Category" value={form.categories} onChange={v => set('categories', v)} placeholder="e.g. Study Abroad, Immigration" />
            <Field label="Read Time" value={form.readTime} onChange={v => set('readTime', v)} placeholder="e.g. 5 min read" />
            <Field label="Date" value={form.date} onChange={v => set('date', v)} placeholder="e.g. May 22, 2026" />
          </div>

          <Field label="Excerpt" value={form.excerpt} onChange={v => set('excerpt', v)} textarea placeholder="Short summary shown on the blog card..." />

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Feature Image</label>
            {imgPreview && <img src={imgPreview} alt="thumb" className="h-32 w-48 object-cover rounded-xl mb-3 border border-slate-700" />}
            <input ref={fileRef} type="file" accept="image/*" className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) { setImgFile(f); setImgPreview(URL.createObjectURL(f)); } }} />
            <div className="flex gap-2 items-center">
              <button onClick={() => fileRef.current?.click()} className={BtnSec}>Choose Image</button>
              {imgFile && <span className="text-slate-400 text-xs">New image selected: {imgFile.name}</span>}
            </div>
          </div>
        </>}

        {/* Tab 1: Content */}
        {tab === 1 && (
          <RichTextEditor
            label="Blog Content"
            value={form.content}
            onChange={v => set('content', v)}
            placeholder="Write your blog post here..."
          />
        )}

        {/* Tab 2: Meta Tags */}
        {tab === 2 && <>
          <SectionTitle>Meta Tags</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Meta Title" value={form.meta.title} onChange={v => set('meta.title', v)} placeholder="SEO Title" />
            <Field label="Canonical URL" value={form.meta.canonical} onChange={v => set('meta.canonical', v)} placeholder="https://example.com/blog/url" />
          </div>
          <Field label="Keywords" value={form.meta.keywords} onChange={v => set('meta.keywords', v)} placeholder="Comma-separated keywords" />
          <Field label="Meta Description" value={form.meta.description} onChange={v => set('meta.description', v)} textarea placeholder="Short SEO description..." />
          <RichTextEditor
            label="Long Content"
            value={form.meta.longContent}
            onChange={v => set('meta.longContent', v)}
          />
          <Field label="Schema (JSON-LD)" value={form.meta.schema} onChange={v => set('meta.schema', v)} textarea placeholder='{ "@context": "https://schema.org", "@type": "BlogPosting", ... }' />
        </>}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/30">
        <button onClick={onCancel} className={BtnSec}>Cancel</button>
        <div className="flex gap-3">
          {tab > 0 && <button onClick={() => setTab(t => t - 1)} className={BtnSec}>← Prev</button>}
          {tab < TABS.length - 1
            ? <button onClick={() => setTab(t => t + 1)} className={BtnPrimary}>Next →</button>
            : <button onClick={submit} disabled={loading} className={BtnPrimary}>
              {loading ? (
                <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <circle cx="12" cy="12" r="10" strokeOpacity=".3" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                </svg>
              ) : blogId ? 'Update Blog' : 'Publish Blog'}
            </button>
          }
        </div>
      </div>
    </div>
  );
}

/* ── Shared styles ── */
const Input = 'w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400/60 transition text-sm';
const BtnSec = 'px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-sm';
const BtnPrimary = 'flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-blue-600 text-white font-semibold hover:scale-105 transition text-sm disabled:opacity-60';

/* ── Sub-components ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-white font-bold text-lg border-l-4 border-amber-400 pl-3">{children}</h3>;
}

function Field({ label, value, onChange, placeholder, textarea }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; textarea?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      {textarea
        ? <textarea className={Input + ' resize-none'} value={value} placeholder={placeholder} rows={4} onChange={e => onChange(e.target.value)} />
        : <input className={Input} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
      }
    </div>
  );
}
