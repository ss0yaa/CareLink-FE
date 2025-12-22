import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

export const refreshApi = axios.create({
  baseURL,
  headers: { 'Content-Type': 'text/plain' },
})

//인터셉터 없는 로그인/회원가입 전용
export const publicApi = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config

    if (!err.response) return Promise.reject(err)

    if (err.response.status === 401 && !original._retry) {
      original._retry = true

      try {
        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) throw new Error('refreshToken이 없습니다.')

        const { data } = await refreshApi.post(`/api/reissue`, refreshToken)

        const newAccessToken = data?.data?.accessToken ?? data?.accessToken
        const newRefreshToken = data?.data?.refreshToken ?? data?.refreshToken

        if (!newAccessToken) throw new Error('accessToken 재발급에 실패했습니다.')

        localStorage.setItem('accessToken', newAccessToken)
        if (newRefreshToken) localStorage.setItem('refreshToken', newRefreshToken)

        original.headers = original.headers ?? {}
        original.headers.Authorization = `Bearer ${newAccessToken}`
        return api(original)
      } catch (e) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
        return
      }
    }
    return Promise.reject(err)
  },
)

export default api
