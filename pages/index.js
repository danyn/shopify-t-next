
import ProductEmptyState from "../components/ProductEmptyState";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState, useEffect } from "react";
// import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [pids, setPids] = useState([]);

  useEffect(() => {
    setPids(products.map(product => {return {id: product.id}}));
    console.log('pids', pids);
  }, [products,])

  const selectedProducts = (items) => {
    setProducts(items);
    setIsOpen(false);
    console.log(items);
  }
  return (
    <>
      <ResourcePicker
        resourceType="Product"
        initialSelectionIds={pids}
        showVariants={false}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={ payload => selectedProducts(payload.selection)}
      />
      { products.length == 0 ?
        (<ProductEmptyState setIsOpen={setIsOpen} />) :
        ( <ProductPage products={products} setIsOpen={setIsOpen} /> )
      }
    </>
  );
}


//  products.map(p=>p.title)