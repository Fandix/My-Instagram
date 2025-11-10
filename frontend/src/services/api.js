import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle responses and save token
api.interceptors.response.use(
  (response) => {
    // Save JWT token from Authorization header
    const token = response.headers['authorization'];
    if (token) {
      localStorage.setItem('jwt_token', token);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Clear token on unauthorized
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/signup', { user: userData });
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/login', { user: credentials });
    if (response.data.data) {
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data;
  },

  logout: async () => {
    try {
      await api.delete('/logout');
    } finally {
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('jwt_token');
  },
};

export default api;
