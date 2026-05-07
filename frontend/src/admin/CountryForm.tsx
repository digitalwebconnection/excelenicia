import { useState, useEffect, useRef } from 'react';
import { getCountry, createCountry, updateCountry } from './api';
import RichTextEditor from './RichTextEditor';

const uid = () => Math.random().toString(36).slice(2);
const emptyPoint = () => ({ _id: uid(), title: '', description: '', image: '', full: '', emoji: '', _uploadImage: false, _previewUrl: '' });
const emptyEdSec = () => ({ _id: uid(), title: '', content: '' });
const emptyDoc = () => ({ _id: uid(), text: '', image: '', _uploadImage: false, _previewUrl: '' });
const emptyIntake = () => ({ _id: uid(), name: '', tag: '', description: '', icon: 'fall' });
const emptyCourse = () => ({ _id: uid(), icon: '', title: '', description: '', image: '', full: '', _uploadImage: false, _previewUrl: '' });

const emptyForm = () => ({
  name: '', code: '', description: '', image: '', population: '',
  meta: { title: '', description: '', keywords: '', canonical: '', longContent: '', schema: '' },
  hero: { title: '', subtitle: '', description: '', backgroundImages: [] as string[], ctaText: '', ctaText2: '' },
  whyStudy: { title: '', intro: '', points: [emptyPoint()] },
  educationSystem: { title: '', intro: '', sections: [emptyEdSec()], highlights: [''] },
  documents: { title: '', subtitle: '', list: [emptyDoc()] },
  intakes: { title: '', subtitle: '', list: [emptyIntake()] },
  courses: { title: '', list: [emptyCourse()] },
});

type F = ReturnType<typeof emptyForm>;
const TABS = ['Basic Info', 'Hero', 'Why Study', 'Education', 'Documents', 'Intakes', 'Courses', 'Meta Tags'];

export default function CountryForm({ countryId, onSuccess, onCancel }: { countryId?: string; onSuccess: () => void; onCancel: () => void }) {
  const [form, setForm] = useState<F>(emptyForm());
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!countryId);
  const [error, setError] = useState('');
  const [thumbPrev, setThumbPrev] = useState('');
  const thumbRef = useRef<HTMLInputElement>(null);

  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const files = useRef<Record<string, any>>({
    image: null,
    heroBackgroundImages: [],
    whyStudyImages: {},
    documentImages: {},
    courseImages: {}
  });

  useEffect(() => {
    // Reset files on mount
    files.current = { image: null, heroBackgroundImages: [], whyStudyImages: {}, documentImages: {}, courseImages: {} };
  }, []);

  useEffect(() => {
    if (!countryId) return;
    (async () => {
        try {
        const d = await getCountry(countryId);
        const defaults = emptyForm();
        const addIds = (arr: any[]) => (arr || []).map((x: any) => ({ ...x, _id: uid(), _uploadImage: false, _previewUrl: '' }));
        
        setForm({
          ...defaults,
          ...d,
          meta: { ...defaults.meta, ...(d.meta || {}) },
          hero: { ...defaults.hero, ...(d.hero || {}) },
          whyStudy: { ...defaults.whyStudy, ...(d.whyStudy || {}), points: addIds(d.whyStudy?.points) },
          educationSystem: { 
            ...defaults.educationSystem, 
            ...(d.educationSystem || {}), 
            sections: addIds(d.educationSystem?.sections), 
            highlights: d.educationSystem?.highlights?.length ? d.educationSystem.highlights : [''] 
          },
          documents: { ...defaults.documents, ...(d.documents || {}), list: addIds(d.documents?.list) },
          intakes: { ...defaults.intakes, ...(d.intakes || {}), list: addIds(d.intakes?.list) },
          courses: { ...defaults.courses, ...(d.courses || {}), list: addIds(d.courses?.list) },
        });
        if (d.image) setThumbPrev(d.image);
      } catch (e: any) { setError(e.message); } finally { setFetching(false); }
    })();
  }, [countryId]);

  const set = (path: string, value: any) => setForm(prev => {
    const next = structuredClone(prev) as any;
    const keys = path.split('.');
    let cur = next;
    for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
    cur[keys[keys.length - 1]] = value; return next;
  });

  const setArr = (sec: keyof F, sub: string, idx: number, field: string, value: any) => setForm(prev => {
    const n = structuredClone(prev) as any; n[sec][sub][idx][field] = value; return n;
  });
  const addArr = (sec: keyof F, sub: string, empty: () => any) => setForm(prev => { const n = structuredClone(prev) as any; n[sec][sub].push(empty()); return n; });
  const remArr = (sec: keyof F, sub: string, idx: number) => setForm(prev => { 
    const n = structuredClone(prev) as any; 
    const item = n[sec][sub][idx];
    if (item._id) {
       // Cleanup file ref if it exists
       const map = (files.current as any)[`${sec}Images`];
       if (map && map[item._id]) delete map[item._id];
    }
    n[sec][sub].splice(idx, 1); 
    return n; 
  });

  const handleDragStart = (e: any, index: number) => {
    dragItem.current = index;
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => { if (e.target) e.target.style.opacity = '0.4'; }, 0);
  };

  const handleDragOver = (e: any, index: number) => {
    e.preventDefault();
    dragOverItem.current = index;
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const fromIndex = dragItem.current;
      const toIndex = dragOverItem.current;
      setForm(prev => {
        const _list = [...prev.documents.list];
        const draggedItemContent = _list[fromIndex];
        _list.splice(fromIndex, 1);
        _list.splice(toIndex, 0, draggedItemContent);
        return { ...prev, documents: { ...prev.documents, list: _list } };
      });
    }
    dragItem.current = null;
    dragOverItem.current = null;
    setDragOverIndex(null);
  };

  const handleDragEnd = (e: any) => {
    dragItem.current = null;
    dragOverItem.current = null;
    setDragOverIndex(null);
    if (e.target) e.target.style.opacity = '1';
  };

  const submit = async () => {
    setError(''); setLoading(true);
    try {
      const fd = new FormData();
      const p = structuredClone(form) as any;

      // 1. Thumbnail
      if (files.current.image) fd.append('image', files.current.image as File);

      // 2. Hero Backgrounds - Filter out blob URLs from JSON and append new files
      const newHeroFiles = files.current.heroBackgroundImages as File[];
      newHeroFiles.forEach(f => fd.append('heroBackgroundImages', f));
      p.hero.backgroundImages = p.hero.backgroundImages.filter((url: string) => !url.startsWith('blob:'));

      // 3. Section Images (Points, Documents, Courses)
      const processSection = (secName: string, listName: string, fileKey: string) => {
        const fileMap = (files.current as any)[fileKey];
        p[secName][listName].forEach((item: any) => {
          if (item._uploadImage && fileMap[item._id]) {
            fd.append(fileKey, fileMap[item._id]);
          }
        });
      };

      processSection('whyStudy', 'points', 'whyStudyImages');
      processSection('documents', 'list', 'documentImages');
      processSection('courses', 'list', 'courseImages');

      // 4. Clean JSON
      const clean = (arr: any[]) => arr.map(({ _id, _previewUrl, ...r }) => {
        // If it was a new upload, remove the temporary blob URL from the final JSON
        if (r._uploadImage) delete r.image;
        return r;
      });

      p.whyStudy.points = clean(p.whyStudy.points);
      p.educationSystem.sections = p.educationSystem.sections.map(({ _id, ...r }: any) => r);
      p.educationSystem.highlights = p.educationSystem.highlights.filter((h: string) => h.trim());
      p.documents.list = clean(p.documents.list);
      p.intakes.list = p.intakes.list.map(({ _id, ...r }: any) => r);
      p.courses.list = clean(p.courses.list);

      fd.append('data', JSON.stringify(p));
      if (countryId) await updateCountry(countryId, fd); else await createCountry(fd);
      onSuccess();
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
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
        {/* Tab 0: Basic Info ── */}
        {tab === 0 && <>
          <SectionTitle>Basic Information</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Country Name *" value={form.name} onChange={v => set('name', v)} placeholder="e.g. United Kingdom" />
            <Field label="Code * (URL slug)" value={form.code} onChange={v => set('code', v.toLowerCase())} placeholder="e.g. uk" />
            <Field label="Population" value={form.population} onChange={v => set('population', v)} placeholder="e.g. 67 Million" />
          </div>
          <Field label="Short Description" value={form.description} onChange={v => set('description', v)} textarea placeholder="Brief description shown on cards" />
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Thumbnail Image</label>
            {thumbPrev && <img src={thumbPrev} alt="thumb" className="h-32 w-48 object-cover rounded-xl mb-3 border border-slate-700" />}
            <input ref={thumbRef} type="file" accept="image/*" className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) { files.current.image = f; setThumbPrev(URL.createObjectURL(f)); } }} />
            <button onClick={() => thumbRef.current?.click()} className={BtnSec}>Choose Image</button>
          </div>
        </>}

        {/* ── Tab 1: Hero ── */}
        {tab === 1 && <>
          <SectionTitle>Hero Section</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Title" value={form.hero.title} onChange={v => set('hero.title', v)} placeholder="Study in the United Kingdom" />
            <Field label="Subtitle" value={form.hero.subtitle} onChange={v => set('hero.subtitle', v)} placeholder="The Complete Student Guide" />
            <Field label="CTA Button 1 (Leave empty to hide)" value={form.hero.ctaText} onChange={v => set('hero.ctaText', v)} placeholder="e.g. Book Free Consultation" />
            <Field label="CTA Button 2 (Leave empty to hide)" value={form.hero.ctaText2} onChange={v => set('hero.ctaText2', v)} placeholder="e.g. View Courses" />
          </div>
          <Field label="Description" value={form.hero.description} onChange={v => set('hero.description', v)} textarea />
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Background Images (Slideshow)</label>
            <div className="flex flex-wrap gap-3 mb-3">
              {form.hero.backgroundImages.map((url, i) => (
                <div key={i} className="relative">
                  <img src={url} alt="" className="h-24 w-36 object-cover rounded-xl border border-slate-700" />
                  <button onClick={() => set('hero.backgroundImages', form.hero.backgroundImages.filter((_, j) => j !== i))}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full text-white text-xs flex items-center justify-center">×</button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <input type="file" accept="image/*" multiple id="heroBgF" className="hidden"
                onChange={e => { 
                  Array.from(e.target.files || []).forEach(f => { 
                    files.current.heroBackgroundImages.push(f); 
                    const url = URL.createObjectURL(f); 
                    setForm(p => ({ ...p, hero: { ...p.hero, backgroundImages: [...p.hero.backgroundImages, url] } })); 
                  }); 
                  (e.target as HTMLInputElement).value = ''; 
                }} />
              <button onClick={() => document.getElementById('heroBgF')?.click()} className={BtnSec}>+ Upload Images</button>
            </div>
            <div className="flex gap-2 mt-3">
              <input id="heroBgUrl" className={Input} placeholder="Or paste image URL and click Add" />
              <button className={BtnSec} onClick={() => { const el = document.getElementById('heroBgUrl') as HTMLInputElement; if (el?.value.trim()) { set('hero.backgroundImages', [...form.hero.backgroundImages, el.value.trim()]); el.value = ''; } }}>Add URL</button>
            </div>
          </div>
        </>}

        {/* ── Tab 2: Why Study ── */}
        {tab === 2 && <>
          <SectionTitle>Why Study Section</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Section Title" value={form.whyStudy.title} onChange={v => set('whyStudy.title', v)} />
          </div>
          <RichTextEditor label="Intro Text" value={form.whyStudy.intro} onChange={v => set('whyStudy.intro', v)} />
          <Divider />
          {form.whyStudy.points.map((pt, i) => (
            <RepeatCard key={pt._id} label={`Point ${i + 1}`} onRemove={() => remArr('whyStudy', 'points', i)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Title" value={pt.title} onChange={v => setArr('whyStudy', 'points', i, 'title', v)} />
                <Field label="Emoji" value={pt.emoji} onChange={v => setArr('whyStudy', 'points', i, 'emoji', v)} placeholder="🎓" />
              </div>
              <Field label="Short Description" value={pt.description} onChange={v => setArr('whyStudy', 'points', i, 'description', v)} />
              <RichTextEditor label="Full Content" value={pt.full} onChange={v => setArr('whyStudy', 'points', i, 'full', v)} />
              <ImgField label="Point Image" previewUrl={pt._previewUrl || pt.image} onFile={f => { files.current.whyStudyImages[pt._id] = f; setArr('whyStudy', 'points', i, '_uploadImage', true); setArr('whyStudy', 'points', i, '_previewUrl', URL.createObjectURL(f)); }} urlValue={pt._uploadImage ? '' : pt.image} onUrl={v => setArr('whyStudy', 'points', i, 'image', v)} fileId={`ws-${i}`} />
            </RepeatCard>
          ))}
          <AddBtn onClick={() => addArr('whyStudy', 'points', emptyPoint)}>+ Add Point</AddBtn>
        </>}

        {/* ── Tab 3: Education ── */}
        {tab === 3 && <>
          <SectionTitle>Education System Section</SectionTitle>
          <Field label="Section Title" value={form.educationSystem.title} onChange={v => set('educationSystem.title', v)} />
          <RichTextEditor label="Intro Text" value={form.educationSystem.intro} onChange={v => set('educationSystem.intro', v)} />
          <Divider />
          <p className="text-slate-300 font-semibold text-sm">Timeline Sections</p>
          {form.educationSystem.sections.map((sec, i) => (
            <RepeatCard key={sec._id} label={`Section ${i + 1}`} onRemove={() => remArr('educationSystem', 'sections', i)}>
              <Field label="Title" value={sec.title} onChange={v => setArr('educationSystem', 'sections', i, 'title', v)} />
              <RichTextEditor label="Content" value={sec.content} onChange={v => setArr('educationSystem', 'sections', i, 'content', v)} />
            </RepeatCard>
          ))}
          <AddBtn onClick={() => addArr('educationSystem', 'sections', emptyEdSec)}>+ Add Section</AddBtn>
          <Divider />
          <p className="text-slate-300 font-semibold text-sm">Highlights (Pill Tags)</p>
          {form.educationSystem.highlights.map((h, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input className={Input} value={h} placeholder="e.g. 3-Year Bachelor's Degree"
                onChange={e => { const n = [...form.educationSystem.highlights]; n[i] = e.target.value; set('educationSystem.highlights', n); }} />
              <button onClick={() => { const n = form.educationSystem.highlights.filter((_, j) => j !== i); set('educationSystem.highlights', n.length ? n : ['']); }}
                className="px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm">✕</button>
            </div>
          ))}
          <AddBtn onClick={() => set('educationSystem.highlights', [...form.educationSystem.highlights, ''])}>+ Add Highlight</AddBtn>
        </>}

        {/* ── Tab 4: Documents ── */}
        {tab === 4 && <>
          <SectionTitle>Documents Section</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Title" value={form.documents.title} onChange={v => set('documents.title', v)} />
            <Field label="Subtitle" value={form.documents.subtitle} onChange={v => set('documents.subtitle', v)} />
          </div>
          <Divider />
          {form.documents.list.map((doc, i) => (
            <div 
              key={doc._id}
              onDragOver={(e) => handleDragOver(e, i)}
              onDrop={handleDrop}
              className={`transition-all duration-200 rounded-xl ${dragOverIndex === i && dragItem.current !== i ? 'ring-2 ring-amber-500 scale-[1.01] bg-amber-500/5' : ''}`}
            >
              <RepeatCard 
                label={`Document ${i + 1}`} 
                onRemove={() => remArr('documents', 'list', i)}
                draggableProps={{
                  draggable: true,
                  onDragStart: (e: any) => handleDragStart(e, i),
                  onDragEnd: handleDragEnd,
                }}
              >
                <Field label="Document Name" value={doc.text} onChange={v => setArr('documents', 'list', i, 'text', v)} placeholder="e.g. Valid Passport" />
                <ImgField label="Document Image" previewUrl={doc._previewUrl || doc.image} onFile={f => { files.current.documentImages[doc._id] = f; setArr('documents', 'list', i, '_uploadImage', true); setArr('documents', 'list', i, '_previewUrl', URL.createObjectURL(f)); }} urlValue={doc._uploadImage ? '' : doc.image} onUrl={v => setArr('documents', 'list', i, 'image', v)} fileId={`doc-${i}`} />
              </RepeatCard>
            </div>
          ))}
          <AddBtn onClick={() => addArr('documents', 'list', emptyDoc)}>+ Add Document</AddBtn>
        </>}

        {/* ── Tab 5: Intakes ── */}
        {tab === 5 && <>
          <SectionTitle>Intakes Section</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Title" value={form.intakes.title} onChange={v => set('intakes.title', v)} />
            <Field label="Subtitle" value={form.intakes.subtitle} onChange={v => set('intakes.subtitle', v)} />
          </div>
          <Divider />
          {form.intakes.list.map((it, i) => (
            <RepeatCard key={it._id} label={`Intake ${i + 1}`} onRemove={() => remArr('intakes', 'list', i)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name" value={it.name} onChange={v => setArr('intakes', 'list', i, 'name', v)} placeholder="September Intake" />
                <Field label="Tag" value={it.tag} onChange={v => setArr('intakes', 'list', i, 'tag', v)} placeholder="Fall Intake" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Icon</label>
                <select className={Input} value={it.icon} onChange={e => setArr('intakes', 'list', i, 'icon', e.target.value)}>
                  <option value="fall">🍂 Fall</option>
                  <option value="winter">❄️ Winter</option>
                  <option value="spring">🌸 Spring</option>
                  <option value="summer">☀️ Summer</option>
                </select>
              </div>
              <RichTextEditor label="Description" value={it.description} onChange={v => setArr('intakes', 'list', i, 'description', v)} />
            </RepeatCard>
          ))}
          <AddBtn onClick={() => addArr('intakes', 'list', emptyIntake)}>+ Add Intake</AddBtn>
        </>}

        {/* ── Tab 6: Courses ── */}
        {tab === 6 && <>
          <SectionTitle>Courses Section</SectionTitle>
          <Field label="Section Title" value={form.courses.title} onChange={v => set('courses.title', v)} />
          <Divider />
          {form.courses.list.map((c, i) => (
            <RepeatCard key={c._id} label={`Course ${i + 1}`} onRemove={() => remArr('courses', 'list', i)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Title" value={c.title} onChange={v => setArr('courses', 'list', i, 'title', v)} placeholder="Business & Management" />
                <Field label="Icon (emoji)" value={c.icon} onChange={v => setArr('courses', 'list', i, 'icon', v)} placeholder="💼" />
              </div>
              <Field label="Short Description" value={c.description} onChange={v => setArr('courses', 'list', i, 'description', v)} />
              <RichTextEditor label="Full Description (card hover)" value={c.full} onChange={v => setArr('courses', 'list', i, 'full', v)} />
              <ImgField label="Course Image" previewUrl={c._previewUrl || c.image} onFile={f => { files.current.courseImages[c._id] = f; setArr('courses', 'list', i, '_uploadImage', true); setArr('courses', 'list', i, '_previewUrl', URL.createObjectURL(f)); }} urlValue={c._uploadImage ? '' : c.image} onUrl={v => setArr('courses', 'list', i, 'image', v)} fileId={`course-${i}`} />
            </RepeatCard>
          ))}
          <AddBtn onClick={() => addArr('courses', 'list', emptyCourse)}>+ Add Course</AddBtn>
        </>}

        {/* ── Tab 7: Meta Tags ── */}
        {tab === 7 && <>
          <SectionTitle>Meta Tags</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Meta Title" value={form.meta.title} onChange={v => set('meta.title', v)} />
            <Field label="Canonical URL" value={form.meta.canonical} onChange={v => set('meta.canonical', v)} />
          </div>
          <Field label="Keywords" value={form.meta.keywords} onChange={v => set('meta.keywords', v)} placeholder="Comma-separated keywords" />
          <Field label="Meta Description" value={form.meta.description} onChange={v => set('meta.description', v)} textarea />
          <RichTextEditor label="Long Content" value={form.meta.longContent} onChange={v => set('meta.longContent', v)} />
          <Field label="Schema (JSON-LD)" value={form.meta.schema} onChange={v => set('meta.schema', v)} textarea placeholder='{ "@context": "https://schema.org", "@type": "FAQPage", ... }' />
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
              {loading ? <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10" strokeOpacity=".3" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></svg> : countryId ? 'Update Country' : 'Create Country'}
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
function Divider() { return <div className="border-t border-slate-800 my-2" />; }
function AddBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition mt-1">{children}</button>;
}
function RepeatCard({ children, label, onRemove, draggableProps }: { children: React.ReactNode; label: string; onRemove: () => void; draggableProps?: any }) {
  return (
    <div 
      className={`border border-slate-700 rounded-xl p-4 space-y-4 bg-slate-800/40 ${draggableProps ? 'cursor-move' : ''}`}
      {...draggableProps}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {draggableProps && (
            <svg className="text-slate-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
          )}
          <span className="text-slate-300 font-semibold text-sm">{label}</span>
        </div>
        <button onClick={onRemove} className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-lg hover:bg-red-500/10 transition">✕ Remove</button>
      </div>
      <div className={draggableProps ? "cursor-default" : ""}>
        {children}
      </div>
    </div>
  );
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
function ImgField({ label, previewUrl, onFile, urlValue, onUrl, fileId }: { label: string; previewUrl: string; onFile: (f: File) => void; urlValue: string; onUrl: (v: string) => void; fileId: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      {previewUrl && <img src={previewUrl} alt="" className="h-28 w-44 object-cover rounded-xl border border-slate-700 mb-2" />}
      <input type="file" accept="image/*" id={fileId} className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f); }} />
      <div className="flex gap-2 flex-wrap items-center">
        <button onClick={() => document.getElementById(fileId)?.click()} className={BtnSec}>Upload Image</button>
        <span className="text-slate-600 text-xs">or</span>
        <input className={Input + ' flex-1 min-w-0'} placeholder="Paste image URL…" value={urlValue} onChange={e => onUrl(e.target.value)} />
      </div>
    </div>
  );
}
