import api from './config'

export async function getAll(table) {
  try {
    const {data} = await api.get(`/${table}`, {
        headers: {
          Authorization: localStorage.token,
        }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}