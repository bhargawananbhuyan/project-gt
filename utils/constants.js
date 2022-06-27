import axios from 'axios'

export const categories = ['Pooja', 'Birthday', 'Anniversary']
export const subCategories = ['Agarbatti', 'Sambrani Dhoops and Cups', 'Camphor']

export const productsAPIService = axios.create({
	baseURL: 'https://glacial-escarpment-83657.herokuapp.com/products',
})
