
import api from './config'

export async function getAppointmentsById(token) {
  try {
    const {data} = await api.get('/customers/profile/appointments', {
      headers: {
        Authorization: `${token}`,
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function deleteAppointment(token, id) {
  try {
    const {data} = await api.delete(`/customers/profile/appointments/${id}`, {
      headers: {
        Authorization: `${token}`,
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}