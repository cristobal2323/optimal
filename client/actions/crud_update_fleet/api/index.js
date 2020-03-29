import fetch from 'isomorphic-fetch';

const API = {
  data: {
    async add(obj) {
      const response = await fetch(
        `/api/crudFleet/${encodeURIComponent(JSON.stringify(obj.id))}`,
        {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            credentials: 'include',
            Pragma: 'no-cache',
          }),
          body: JSON.stringify(obj.form),
        },
      );
      const { status } = response;
      let data = await response.json();

      return {
        data,
        status,
      };
    },
    async get(obj) {
      let response = await fetch(
        `/api/crudFleet/${encodeURIComponent(JSON.stringify(obj))}`,
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
