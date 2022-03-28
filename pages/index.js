
import ProductEmptyState from "../components/ProductEmptyState";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState } from "react";
import ProductList from "../components/ProductList";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const selectedProducts = (items) => {
    setProducts(items);
    setIsOpen(false);
    console.log(items);
  }
  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={ payload => selectedProducts(payload.selection)}
      />
      { products.length == 0 ?
        (<ProductEmptyState setIsOpen={setIsOpen} />) :
        (<ProductList products={products}/> )
      }
    </>
  );
}


//  products.map(p=>p.title)