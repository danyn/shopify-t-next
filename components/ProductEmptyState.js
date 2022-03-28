import React from "react";
import { Card, EmptyState } from "@shopify/polaris";

function ProductEmptyState({setIsOpen}) {
  return (
    <Card>
      <EmptyState
        heading="Manage the products you want to display"
        action={{
          content: "Select products",
          onAction: () => setIsOpen(true),
        }}
        image="https://cdn.shopify.com/s/files/1/0599/1861/4736/files/triadic-color-wheel.png?v=1648429549"
      >
        <p>Select the products you want to use on your banner</p>
      </EmptyState>
    </Card>
  );
}

export default ProductEmptyState;
