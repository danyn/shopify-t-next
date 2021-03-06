import React from "react";
import { Card, ResourceList} from "@shopify/polaris";
import ProductItem from "./productItem";
// import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: "Product", plural: "Products" }}
        items={products}
        renderItem={product => <ProductItem product={product}/> }
      /> 
    </Card>
  );
}

export default ProductList;

// <ProductItem product={product} />
