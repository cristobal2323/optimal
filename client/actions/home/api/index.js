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
    async postTortas(item) {
      const response = await fetch('/api/homeTortas', {
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
    async postTurnosMasRiesgosos(item) {
      const response = await fetch('/api/homeTurnosMasRiesgosos', {
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
    async postGraph(item) {
      const response = await fetch('/api/homeGraph', {
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
    async postTable(item) {
      const response = await fetch('/api/homeTable', {
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
    async postTableCount(item) {
      const response = await fetch('/api/homeTableCount', {
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
