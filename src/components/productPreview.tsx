import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { IProduct } from "../dataDefinitions/product";

interface ProductPreviewComponentParams {
  productID: number
}

export function ProductPreviewComponent(
  { productID }: ProductPreviewComponentParams
) {
  useEffect(() => {
    setProduct(HelperProducts.GetProduct(productID));
  }, [])

  const [product, setProduct] = useState<IProduct | undefined>();

  return (
    <div>
      <h2>{product?.name_en}</h2>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "orange",
          width: "200px",
          height: "200px",
        }}>
      </div>
    </div>
  )
}