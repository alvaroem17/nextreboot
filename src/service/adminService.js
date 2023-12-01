import api from "./config";

export async function getAll(table) {
  try {
    const { data } = await api.get(`/${table}`, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOne(table, id) {
  try {
    const { data } = await api.get(`/${table}/${id}`, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteOne(table, id) {
  try {
    const { data } = await api.delete(`/${table}/${id}`, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createOne(table, values) {
  try {
    const { data } = await api.post(`/${table}`, values, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateOne(table, id,values) {
  try {
    const {data} = await api.put(`/${table}/${id}`, values, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}
