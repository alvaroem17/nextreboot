import api from "./config";

export async function getAll(table) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.get(`/${table}`, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getOne(table, id) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.get(`/${table}/${id}`, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      return data;

    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteOne(table, id) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.delete(`/${table}/${id}`, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createOne(table, values) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.post(`/${table}`, values, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateOne(table, id,values) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const {data} = await api.put(`/${table}/${id}`, values, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
