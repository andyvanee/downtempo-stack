import { Link } from "@remix-run/react";

export default function Index() {
    return <>
        <p>Hello Remix</p>
        <Link to="/products">View Products</Link>
    </>
}
