import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { Link } from "react-router-dom";

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

  const getSellableItemLink = () => {
    if (!sellableItem) {
      return "";
    }

    if (sellableItem.variantID === undefined) {
      return `/product/${sellableItem.productID}`;
    }
    else {
      return `/product/${sellableItem.productID}?variantID=${sellableItem.variantID}`;
    }
  }

  return (
    <Link
      to={getSellableItemLink()}
      style={{ textDecoration: 'none', color: 'inherit' }}>

      <div className="sellable-item-preview">
        {sellableItem &&
          <div>
            <div
              className="image-holder"
            >
            </div>
            <p
              className="product-name">
              {sellableItem.productName_en}
            </p>
            {sellableItem.variantName_en &&
              <p
                className="product-variant">
                {sellableItem.variantName_en}
              </p>
            }
            <p
              className="product-price">
              {`${sellableItem.price_eur}€`}
            </p>
          </div>
        }

      </div>
    </Link>
  )
}