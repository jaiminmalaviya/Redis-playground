import { ITEMS_PER_PAGE } from '@/libs/constants'
import prisma from '@/libs/prismadb'
import { redis } from '@/libs/redis'
import { NextResponse } from 'next/server'

export async function GET(req) {
   try {
      const searchParams = req.nextUrl.searchParams
      const category = searchParams.get('category')
      const page = parseInt(searchParams.get('page'), 10) || 1
      const limit = ITEMS_PER_PAGE

      const hashKey = `category:${category || 'all'}:${page}`

      const categoryFilter = category ? { category: { equals: category } } : {}

      const totalItems = await prisma.product.count({
         where: categoryFilter,
      })

      const offset = (page - 1) * limit

      const products = await prisma.product.findMany({
         take: limit,
         skip: offset,
         where: categoryFilter,
      })

      await redis.hset(hashKey, { products, totalItems })
      await redis.expire(hashKey, 2 * 60 * 60)

      return NextResponse.json({ products, totalItems }, { status: 200 })
   } catch (error) {
      console.error('Error fetching products:', error)
      return NextResponse.error('Internal Server Error', { status: 500 })
   }
}
