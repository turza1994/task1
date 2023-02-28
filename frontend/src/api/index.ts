import axios from 'axios'

const url = 'https://munchies-api.up.railway.app'

const email = {
  headers: { 'x-access-user': 'mazba.turza@gmail.com' },
}

export const getProducts = () => axios.get(`${url}/products`)
export const loadMoreProducts = () => axios.get(`${url}/products`)
export const getOrders = () => axios.get(`${url}/order`)
export const createOrder = (newOrder: any) =>
  axios.post(`${url}/order`, newOrder, email)
