import axios from 'axios';

const API_URL = 'http://localhost:3000'

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    localStorage.setItem('user', JSON.stringify(response.data));
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;