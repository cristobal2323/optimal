import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async get(obj) {
      let response = await fetch(
        `/api/mapa/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getVehicle(obj) {
      let response = await fetch(
        `/api/mapaGetVehicle/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getDevice(obj) {
      let response = await fetch(
        `/api/mapaGetDevice/${encodeURIComponent(JSON.stringify(obj))}`,
      );

      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async getVehicleGraph(obj) {
      let response = await fetch(
        `/api/mapaGetGraphVehicle/${encodeURIComponent(JSON.stringify(obj))}`,
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
