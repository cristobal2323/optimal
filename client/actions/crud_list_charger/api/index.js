import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async get(obj) {
      let response = await fetch(
        `/api/crudCharger/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async deleteItem(obj) {
      const response = await fetch(`/api/crudCharger/${JSON.stringify(obj)}`, {
        method: 'DELETE',
      });
      const { status } = response;
      const data = await response.json();

      return { data, status };
    },
  },
};
export default API;
