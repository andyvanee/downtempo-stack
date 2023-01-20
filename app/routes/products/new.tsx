import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Product } from "../../types/product";

export const loader: LoaderFunction = async () => {
  return json([
    { id: "1", name: "Socks" },
    { id: "2", name: "Shoes" },
  ]);
};

export default function New() {
  const products = useLoaderData<typeof loader>() as Product[];

  return (
    <div style={{border: '1px solid blue'}}>
      <h1>New Products</h1>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <Link to="/products">All products</Link>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div style={{border: '1px solid red'}}>An unexpected error occurred: {error.message}</div>;
}
