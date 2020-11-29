export const API =
  process.env.NODE_ENV === 'development' ? '/comments' : '/db.json'

export const baseRoute =
  process.env.NODE_ENV === 'development' ? '/' : '/react-swr-todo/'
  
export const AXIOS_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4001'
    : 'https://github.com/NicKAnderson038/react-swr-todo'
