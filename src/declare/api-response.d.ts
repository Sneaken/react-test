declare interface IMovie {
  rating: {
    max: number
    average: number
    details: {
      '1': number
      '2': number
      '3': number
      '4': number
      '5': number
    }
    stars: string
    min: number
  }
  genres: string[]
  title: string
  casts: [
    {
      avatars: {
        small: string
        large: string
        medium: string
      }
      name_en: string
      name: string
      alt: string
      id: string
    },
    {
      avatars: {
        small: string
        large: string
        medium: string
      }
      name_en: string
      name: string
      alt: string
      id: string
    },
    {
      avatars: {
        small: string
        large: string
        medium: string
      }
      name_en: string
      name: string
      alt: string
      id: string
    }
  ]
  durations: string[]
  collect_count: number
  mainland_pubdate: string
  has_video: boolean
  original_title: string
  subtype: string
  directors: [
    {
      avatars: {
        small: string
        large: string
        medium: string
      }
      name_en: string
      name: string
      alt: string
      id: string
    }
  ]
  pubdates: string[]
  year: string
  images: {
    small: string
    large: string
    medium: string
  }
  alt: string
  id: string
}

declare interface ITop250 {
  count: number
  start: number
  total: number
  subjects: Array<IMovie>
  title: string
}

declare interface IMovies {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
declare interface ISelectMovie {
  Search: Array<IMovies>
  totalResults: string
  Response: 'True' | 'False'
  Error?: string
}

declare interface INewsListContent {
  aid: string
  catid: string
  username: string
  title: string
  pic: string
  dateline: string
}
declare interface INewsContent extends INewsListContent {
  author: string
  summary: string
  content: string
}
declare interface INewsContentResponse {
  result: Array<INewsContent>
}
declare interface INews {
  result: Array<INewsListContent>
}
