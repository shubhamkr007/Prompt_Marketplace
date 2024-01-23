const BASE_URL = process.env.REACT_APP_SERVER_URL;

const fetchWithToken = (url, options = {}) => {
  const token = localStorage.getItem("token");

  if (token) {
    options.headers = {
      ...options.headers,
      authorization: `Bearer ${token}`,
    };
  }

  const fullUrl = `${BASE_URL}/${url}`;

  return fetch(fullUrl, options);
};

export default fetchWithToken;