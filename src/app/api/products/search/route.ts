import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Artificial delay for dev. purposes

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q')) // Commonly, 'q' is refered to the params of the search

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
