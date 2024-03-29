import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { Link } from "react-router-dom";
import { ImagePaths } from "../library/imagesPaths";
import { HelperProductTypes } from "../helpers/helperProductTypes";
import { ProductTypeColor } from "../library/productTypeColor";
import { SellableItemPath } from "../library/sellableItemLink";

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

  const renderImage = () => {

    const defaultImageElem = <div className="image-holder" style={{ width: "100%" }}></div>;

    if (!sellableItem) {
      return defaultImageElem;
    }

    if (sellableItem.photos === undefined || sellableItem.photos.length === 0) {
      return defaultImageElem;
    }

    return (
      <div
        className="image-holder"
      >
        <img
          className="image"
          src={ImagePaths.get(sellableItem.photos[0])}
          alt={ImagePaths.get(sellableItem.photos[0])}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    )
  }

  return (
    <Link
      to={SellableItemPath.getPath(sellableItem)}
      style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className="sellable-item-preview"
        style={{
          borderColor: ProductTypeColor.GetColor(sellableItem?.type)
        }}
      >
        {sellableItem &&
          <div
          >
            {renderImage()}

            <div style={{
              paddingTop: '0.0rem',
              paddingInline: '0.5rem',
            }}>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginTop: '0.5rem',
                  gap: '1.5rem',
                  width: '100%',
                }}>

                {sellableItem.variantName_en &&
                  <p
                    className="product-name">
                    {sellableItem.variantName_en}
                  </p>
                }
                {sellableItem.variantName_en === undefined &&
                  <p
                    className="product-name">
                    {sellableItem.productName_en}
                  </p>
                }

                <p
                  className="product-type">
                  {HelperProductTypes.GetProductTypeNameSingular(sellableItem.type)}
                </p>
              </div>

              <p
                className="product-price">
                {`${sellableItem.price_eur}€`}
              </p>
            </div>
          </div>
        }

      </div>
    </Link >
  )
}