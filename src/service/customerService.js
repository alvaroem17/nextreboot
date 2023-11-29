
import api from './config'

export async function getAppointmentsById() {
  try {
    const {data} = await api.get('/customers/profile/appointments')
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function deleteAppointment(id) {
  try {
    const {data} = await api.delete(`/customers/profile/appointments/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getAppoinmentsUnavailable(date) {
  try {
    const {data} = await api.get(`/appointments/forcustomers/${date}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function addAppointment(datos) {
  try {
    const {data} = await api.post(`/customers/profile/appointments`, datos)
    return data
  } catch (error) {
    console.error(error)
  }
}