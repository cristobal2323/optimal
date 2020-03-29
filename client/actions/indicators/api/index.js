import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async get(obj) {
      let response = await fetch(
        `/api/indicators/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
  },
};
export default API;
