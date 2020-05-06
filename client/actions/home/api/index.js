import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async getAreaTurnos(obj) {
      let response = await fetch(
        `/api/homeAreaTurnos/${encodeURIComponent(JSON.stringify(obj))}`,
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
