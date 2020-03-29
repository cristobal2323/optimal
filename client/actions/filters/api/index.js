import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async getDevice(obj) {
      let response = await fetch(
        `/api/filterDevice/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getModels(obj) {
      let response = await fetch(
        `/api/filterModels/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getTypes(obj) {
      let response = await fetch(
        `/api/filterTypes/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getFleet(obj) {
      let response = await fetch(
        `/api/filterFleet/${encodeURIComponent(JSON.stringify(obj))}`,
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
