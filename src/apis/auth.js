import { publicApi, refreshApi } from './axios'

export const login = (payload) => publicApi.post('/api/login', payload)
export const signup = (payload) => publicApi.post('/api/signup', payload)

export const checkPhoneDup = (phoneNum) => refreshApi.post('/api/signup/duplicate-check', phoneNum)
