import axios from 'axios'

export async function getTop250() {
  try {
    const url = '/api/top250.json'
    const { data } = await axios.get<ITop250>(url)
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}
