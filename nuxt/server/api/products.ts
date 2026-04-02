export default defineEventHandler(async () => {
  const data = await $fetch<{ products: unknown[] }>('https://dummyjson.com/products?limit=100')
  return data.products
})
