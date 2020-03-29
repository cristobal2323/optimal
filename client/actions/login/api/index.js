import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async post(item) {
      const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          credentials: 'include',
          Pragma: 'no-cache',
        }),
        body: JSON.stringify(item),
      });
      const status = response.status;
      const data = await response.json();
      return { data: data, status: status };
    },
  },
};
export default API;
