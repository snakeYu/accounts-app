import axios from 'axios';
const api=process.env.REACT_APP_RECORDS_API_URL || "https://5c66bbb324e2140014f9edd2.mockapi.io";

export const getAll=()=>axios.get(`${api}/api/v1/records`)

export const createRecord=(body)=>axios.post(`${api}/api/v1/records`,body)

export const updateRecord=(id,body)=>axios.put(`${api}/api/v1/records/${id}`,body)

export const deleteRecord=(id)=>axios.delete(`${api}/api/v1/records/${id}`)