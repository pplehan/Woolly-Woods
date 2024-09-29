import server from '../server'

export const productApi = {
  getProducts: async() => {
    const data = await server.get('/products')
    return data
  }
}