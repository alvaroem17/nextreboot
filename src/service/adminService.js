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

export async function getOne(table,id) {
    try {
      const {data} = await api.get(`/${table}/${id}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }