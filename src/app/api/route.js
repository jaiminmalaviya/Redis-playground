import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req) {
   const res = await fetch('https://dummyjson.com/products?limit=100')
   const data = await res.json()
   const productsData = data.products

   productsData.map(async (product) => {
      const [firstImage] = product.images

      const createdProduct = await prisma.product.create({
         data: {
            title: product.title,
            description: product.description,
            price: product.price,
            image: firstImage,
            category: product.category,
         },
      })

      console.log('Product seeded successfully:', createdProduct)
   })

   return NextResponse.json(productsData, { status: 200 })
}
