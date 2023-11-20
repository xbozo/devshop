import data from "../data.json";

// Quando essa chamada for realizada com o método GET
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Artificial delay for dev. purposes

  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
}
