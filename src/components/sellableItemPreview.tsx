import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { IProduct } from "../dataDefinitions/product";
import { ISellableItem } from "../dataDefinitions/sellableItem";

interface ProductPreviewComponentParams {
  productID: number,
  variantID: number | undefined,
}

export function SellableItemPreviewComponent(
  { productID, variantID }: ProductPreviewComponentParams
) {

  const [sellableItem, setSellableItem] = useState<ISellableItem | undefined>();

  useEffect(() => {
    setSellableItem(HelperProducts.GetSellableItem(productID, variantID));
  }, [productID, variantID])


  return (
    <div>
      {sellableItem &&
        <div>
          <h2>{sellableItem.productName_en}</h2>
          {sellableItem.variantName_en &&
            <h3>
              {sellableItem.variantName_en}
            </h3>
          }
          <p>{`${sellableItem.price_eur}€`}</p>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "orange",
              width: "200px",
              height: "200px",
            }}>
          </div>
        </div>
      }

    </div>
  )
}