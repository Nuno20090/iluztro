import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { IProduct } from "../dataDefinitions/product";

interface ProductComponentParams {
  productID: number
}

export function ProductComponent(
  { productID }: ProductComponentParams
) {
  useEffect(() => {
    setProduct(HelperProducts.GetProduct(productID));
  }, [productID])

  const [product, setProduct] = useState<IProduct | undefined>();

  return (
    <div>
      <h2>{product?.name_en}</h2>
      <div style={{
        border: "1px solid black",
        backgroundColor: "orange",
        width: "200px",
        height: "200px",
      }}>

      </div>
    </div>
  )
}