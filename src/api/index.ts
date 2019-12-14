import axios from 'axios'

export async function getTop250() {
  try {
    const url = '/api/top250.json' //mock数据
    // const url = 'http://report.qiyu3.com/jiangbin/react/movie/mock/top250.json'
    const { data } = await axios.get<ITop250>(url)
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}
export async function selectMovie(keyword: string) {
  try {
    const url = 'http://www.omdbapi.com'
    const { data } = await axios.get<ISelectMovie>(url, {
      params: {
        s: keyword,
        apikey: '4a3b711b'
      }
    })
    if (data.Response === 'True') {
      return data
    } else {
      throw new Error(data.Error)
    }
  } catch (e) {
    throw new Error(e.message)
  }
}
