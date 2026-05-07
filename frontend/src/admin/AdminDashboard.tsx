import { useState, useEffect } from 'react';
import { getCountries, deleteCountry, logout } from './api';
import CountryForm from './CountryForm';
// import CountryForm from './CountryForm';

interface Country { _id: string; name: string; code: string; description: string; image: string; population: string; }

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'list' | 'add' | 'edit'>('list');
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchCountries = async () => {
    setLoading(true);
    try { setCountries(await getCountries()); }
    catch (e: any) { showToast(e.message, 'error'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchCountries(); }, []);

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try { await deleteCountry(id); setCountries(p => p.filter(c => c._id !== id)); showToast('Deleted successfully'); }
    catch (e: any) { showToast(e.message, 'error'); }
    finally { setDeleting(false); setDeleteConfirm(null); }
  };

  const handleFormSuccess = () => {
    fetchCountries(); setView('list'); setEditId(null);
    showToast(view === 'add' ? 'Country created!' : 'Country updated!');
  };


  if (view === 'add' || view === 'edit') return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} onLogout={() => { logout(); onLogout(); }} />
      <div className={`flex-1 flex flex-col transition-all min-h-screen ${sidebarOpen ? 'ml-60' : 'ml-16'}`}>
        <TopBar title={view === 'add' ? 'Add New Country' : 'Edit Country'} onToggle={() => setSidebarOpen(v => !v)} />
        <div className="flex-1 p-6 overflow-y-auto">
          <CountryForm countryId={view === 'edit' ? editId! : undefined} onSuccess={handleFormSuccess} onCancel={() => { setView('list'); setEditId(null); }} />
        </div>
      </div>
      {toast && <Toast {...toast} />}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} onLogout={() => { logout(); onLogout(); }} />
      <div className={`flex-1 flex flex-col transition-all min-h-screen ${sidebarOpen ? 'ml-60' : 'ml-16'}`}>
        <TopBar title="Country Management" onToggle={() => setSidebarOpen(v => !v)} />
        <div className="flex-1 p-6 overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">All Countries</h2>
              <p className="text-slate-400 text-sm mt-1">{countries.length} countries in database</p>
            </div>
            <button onClick={() => setView('add')}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:scale-105 transition shadow-lg text-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              Add New Country
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-slate-400">
              <svg className="animate-spin mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                <circle cx="12" cy="12" r="10" strokeOpacity=".2" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
              </svg>
              Loading countries…
            </div>
          ) : countries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-slate-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="56" height="56" className="mb-4 opacity-40">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <p className="mb-4">No countries yet.</p>
              <button onClick={() => setView('add')} className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold text-sm">Add First Country</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {countries.map(c => (
                <div key={c._id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all group">
                  <div className="relative h-44 bg-slate-800">
                    {c.image
                      ? <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      : <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                      </div>
                    }
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded-lg">{c.code.toUpperCase()}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-base">{c.name}</h3>
                    {c.population && <p className="text-slate-400 text-xs mt-1">👥 {c.population}</p>}
                    <p className="text-slate-500 text-xs mt-2 line-clamp-2">{c.description || 'No description.'}</p>
                  </div>
                  <div className="flex border-t border-slate-800">
                    <button onClick={() => { setEditId(c._id); setView('edit'); }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-blue-400 hover:bg-blue-500/10 text-sm transition">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                      Edit
                    </button>
                    <div className="w-px bg-slate-800" />
                    <button onClick={() => setDeleteConfirm(c._id)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-red-400 hover:bg-red-500/10 text-sm transition">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" /></svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setDeleteConfirm(null)}>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-center w-14 h-14 bg-red-500/10 rounded-full mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" width="28" height="28"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" /></svg>
            </div>
            <h3 className="text-white font-bold text-xl text-center mb-2">Delete Country?</h3>
            <p className="text-slate-400 text-sm text-center mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-sm">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} disabled={deleting}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition text-sm disabled:opacity-60 flex items-center justify-center">
                {deleting ? <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10" strokeOpacity=".3" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></svg> : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast {...toast} />}
    </div>
  );
}

function Sidebar({ open, onLogout }: { open: boolean; onToggle: () => void; onLogout: () => void }) {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-slate-900 border-r border-slate-800 flex flex-col z-40 transition-all ${open ? 'w-60' : 'w-16'}`}>
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-slate-800 ${open ? '' : 'justify-center'}`}>
        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        </div>
        {open && <span className="text-white font-bold text-sm">Excelencia</span>}
      </div>
      <nav className="flex-1 p-3 space-y-1">
        <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-blue-600/10 border border-amber-500/20 text-amber-400 cursor-pointer ${open ? '' : 'justify-center'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          {open && <span className="text-sm font-medium">Countries</span>}
        </div>
      </nav>
      <div className="p-3 border-t border-slate-800">
        <button onClick={onLogout} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition ${open ? '' : 'justify-center'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
          {open && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}

function TopBar({ title, onToggle }: { title: string; onToggle: () => void }) {
  return (
    <div className="sticky top-0 z-30 flex items-center gap-4 px-6 py-4 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <button onClick={onToggle} className="text-slate-400 hover:text-white transition">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
      <h1 className="text-white font-semibold flex-1">{title}</h1>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">A</div>
    </div>
  );
}

function Toast({ msg, type }: { msg: string; type: 'success' | 'error' }) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium animate-bounce-in ${type === 'success' ? 'bg-emerald-900 border border-emerald-700 text-emerald-300' : 'bg-red-900 border border-red-700 text-red-300'}`}>
      {type === 'success'
        ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
      }
      {msg}
    </div>
  );
}
