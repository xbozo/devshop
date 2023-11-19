import data from "../data.json";

// Quando essa chamada for realizada com o método GET
export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
}
