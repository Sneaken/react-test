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

/**
 * 获取新闻列表
 * @param page 页码
 */
export async function getNews(page: number = 1) {
  try {
    const url = 'http://www.phonegap100.com/appapi.php'
    const { data } = await axios.get<INews>(url, {
      params: {
        a: 'getPortalList',
        catid: 20,
        page
      }
    })
    if (data.result.length !== 0) {
      return data.result
    } else {
      throw new Error('暂无数据')
    }
  } catch (e) {
    throw new Error(e.message)
  }
}

export async function getArticle(aid: string) {
  try {
    const url = 'http://www.phonegap100.com/appapi.php'
    const { data } = await axios.get<INewsContentResponse>(url, {
      params: {
        a: 'getPortalArticle',
        aid
      }
    })
    if (data.result.length !== 0) {
      return data.result[0]
    } else {
      throw new Error('暂无数据')
    }
  } catch (e) {
    throw new Error(e.message)
  }
}
