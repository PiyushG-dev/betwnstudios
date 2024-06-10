import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3].map((product) => {
        return <Link href={`products/${product}`}>product {product}</Link>;
      })}
    </div>
  );
};

export default Products;
