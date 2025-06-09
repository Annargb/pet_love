import { clientFetch } from '../clientFetch'

export const getNews = (body) => {
  return clientFetch.get('/news', body)
}
