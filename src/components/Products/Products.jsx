import { useEffect, useState } from "react";
import Product from "../product/product";
import NoDataFound from "../NoDataFound/NoDataFound";
const Products = ({ products, click }) => {
  const [newProducts, setNewProducts] = useState([]);
  const [newProducts1, setNewProducts1] = useState([]);
  useEffect(() => {
    fetch("/prodectsData.json")
      .then((res) => res.json())
      .then((data) => setNewProducts(data));
    const makefil = newProducts.filter((filters) => filters.id === click);
    // if (makefil.length === 0) {
    //   setNewProducts;
    // }
    setNewProducts1(makefil);
  }, [click]);
  console.log(newProducts1);
  return (
    <>
      {click == "" || click === "All" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5 w-5/6 mx-auto">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-5/6  gap-5  mx-auto">
          {newProducts1.length == 0 ? (
            <NoDataFound></NoDataFound>
          ) : (
            <>
              {newProducts1.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
