import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { verifyToken } from './api';

export default function AdminApp() {
  const [authed, setAuthed] = useState<boolean | null>(null); // null = checking

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { setAuthed(false); return; }
    verifyToken().then(valid => setAuthed(valid)).catch(() => setAuthed(false));
  }, []);

  if (authed === null) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <svg className="animate-spin text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
        <circle cx="12" cy="12" r="10" strokeOpacity=".2"/><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
      </svg>
    </div>
  );

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;
  return <AdminDashboard onLogout={() => setAuthed(false)} />;
}
