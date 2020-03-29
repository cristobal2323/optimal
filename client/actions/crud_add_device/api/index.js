import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async add(item) {
      const response = await fetch('/api/crudDevice', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          credentials: 'include',
          Pragma: 'no-cache',
        }),
        body: JSON.stringify(item),
      });
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
