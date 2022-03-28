import React from 'react'
import { ResourceItem, Thumbnail, TextStyle } from "@shopify/polaris";

function ProductItem({product}) {
  const image = product.images[0].originalSrc
  const {title, vendor} = product;
  const price = product.variants[0].price
  console.log(product)
  console.log('Price: ', product.variants[0].price)
    return (
      <ResourceItem
        media={<Thumbnail source={image}/>}
        name={title}
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
        </h3>
        <div>by {vendor}</div>
        <div>${price}</div> 
      </ResourceItem>
    );
}

export default ProductItem