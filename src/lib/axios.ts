import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: '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',
  },
})
