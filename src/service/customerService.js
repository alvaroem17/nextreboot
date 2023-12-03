import api from "./config";

export async function getAppointmentsById() {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.get("/customers/profile/appointments", {
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

export async function deleteAppointment(id) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.delete(
        `/customers/profile/appointments/${id}`,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      );
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getAppoinmentsUnavailable(date) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.get(`/appointments/forcustomers/${date}`, {
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

export async function addAppointment(datos) {
  try {
    if (window.localStorage !== undefined && window.localStorage.token) {
      const { data } = await api.post(
        `/customers/profile/appointments`,
        datos,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      );
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
