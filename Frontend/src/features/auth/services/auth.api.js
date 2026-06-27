import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})


export async function register({username, password, email}){
  try{
    const response = await api.post('/api/auth/register', {
    username, password, email
  })
  return response.data
  }catch(err){
    console.error(err)
    throw err
  }
}


export async function login ({username, password}){
  try{
    const response = await api.post('/api/auth/login', {username, password})
    return response.data
  }catch(err){
    console.error(err)
    throw err
  }
}


export async function logout(){
  try{
    const response = await api.get('/api/auth/logout')
    return response.data
  }catch(err){
    console.error(err)
    throw err
  }
}


export async function getMe(){
  try{
    const response = await api.get('/api/auth/get-me')
    return response.data
  }catch(err){
    console.error(err)
    throw err
  }
}

