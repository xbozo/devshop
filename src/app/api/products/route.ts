import data from "./data.json";

// Quando essa chamada for realizada com o método GET
export async function GET() {
  return Response.json(data.products);
}
