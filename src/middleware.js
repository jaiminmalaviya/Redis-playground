import { NextResponse } from 'next/server'
import { redis } from './libs/redis'

export const middleware = async (request) => {
   const searchParams = request.nextUrl.searchParams
   const category = searchParams.get('category')
   const page = parseInt(searchParams.get('page'), 10) || 1

   const hashKey = `category:${category || 'all'}:${page}`

   const cachedData = await redis.hgetall(hashKey)

   if (cachedData) {
      return NextResponse.json(cachedData, { status: 200 })
   }
}
export const config = {
   matcher: ['/api/:function*'],
}
