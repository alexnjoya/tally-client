const BASE_URL = "http://localhost:5000/api/user";

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function getProfile() {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch profile');
  }
  return data;
}

export async function updateProfile(profile: {
  name?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  institution?: string;
}) {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(profile),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to update profile');
  }
  return data;
} 