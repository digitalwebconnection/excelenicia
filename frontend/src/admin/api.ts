const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('adminToken');

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

/* ── Auth ──────────────────────────────────────────────── */
export const login = async (username: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const contentType = res.headers.get('content-type');
  if (!res.ok) {
    if (contentType && contentType.includes('application/json')) {
      const err = await res.json();
      throw new Error(err.message || 'Login failed');
    } else {
      throw new Error(`Server error: ${res.status} ${res.statusText}. The URL might be incorrect or the server is down.`);
    }
  }

  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    localStorage.setItem('adminToken', data.token);
    return data;
  }
  throw new Error('Server returned an unexpected response format (not JSON).');
};

export const verifyToken = async () => {
  const res = await fetch(`${API_BASE}/auth/verify`, {
    headers: authHeaders(),
  });
  return res.ok;
};

export const logout = () => localStorage.removeItem('adminToken');

/* ── Countries ─────────────────────────────────────────── */
export const getCountries = async () => {
  const res = await fetch(`${API_BASE}/countries`);
  if (!res.ok) throw new Error('Failed to fetch countries');
  return res.json();
};

export const getCountry = async (code: string) => {
  const res = await fetch(`${API_BASE}/countries/${code}`);
  if (!res.ok) throw new Error('Failed to fetch country');
  return res.json();
};

export const createCountry = async (formData: FormData) => {
  const res = await fetch(`${API_BASE}/countries`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to create country');
  }
  return res.json();
};

export const updateCountry = async (id: string, formData: FormData) => {
  const res = await fetch(`${API_BASE}/countries/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to update country');
  }
  return res.json();
};

export const deleteCountry = async (id: string) => {
  const res = await fetch(`${API_BASE}/countries/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to delete country');
  }
  return res.json();
};
