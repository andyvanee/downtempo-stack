import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Product } from "../types/product";

export const loader: LoaderFunction = async () => {
  return json([
    { id: "1", name: "Pants" },
    { id: "2", name: "Jacket" },
  ]);
};

export default function Products() {
  const products = useLoaderData<typeof loader>() as Product[];

  return (
    <>
        <Link to="/">Home</Link>
        <div style={{border: '1px solid green'}}>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <Link to="/products/new">New products</Link>
        </div>
        <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div style={{border: '1px solid red'}}>An unexpected error occurred: {error.message}</div>;
}
