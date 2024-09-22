"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SortProducts from "../components/SortProducts";

const productsData = [
  { id: 1, name: "Product A", price: 30 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 40 },
];

export default function ProductList() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(productsData);

  // Apply sorting based on query parameters
  useEffect(() => {
    const sortParam = searchParams.get("sort");
    let sortedProducts = [...productsData];

    if (sortParam === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortParam === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  }, [searchParams]);

  return (
    <div className="flex">
      <h1 className="text-center  font-extrabold">Product List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SortProducts />
        </Suspense>
      <br />
      <br />
      <Suspense>
         <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      </Suspense>
     
     
    </div>
  );
}
