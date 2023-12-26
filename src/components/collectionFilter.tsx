import { useEffect, useState } from "react";
import { HelperCollections } from "../helpers/helperCollections";
import { IProductType } from "../dataDefinitions/productType";
import { ProductTypeButton } from "./buttons/productTypeButton";
import { ProductTypeFilter } from "../dataDefinitions/collectionFilter";

interface CollectionFilterProps {
  collectionID: number;
  onFilterChanged : (productType: ProductTypeFilter) => void;
}

export function CollectionFilterComponent(
  {
    collectionID,
    onFilterChanged
  }: CollectionFilterProps
) {

  const [productTypes, setProductTypes] = useState<IProductType[]>([]);

  const handleProductTypeClicked = (productType: ProductTypeFilter) => {
    onFilterChanged(productType);
  }


  useEffect(() => {
    setProductTypes(HelperCollections.GetCollectionProductTypes(collectionID));
  }, [collectionID]);

  return (
    <>
      {
        productTypes.length > 1 && <>
          <div className="collection-filters">

            <ProductTypeButton
              label={"All collection"}
              productType={"All"}
              onClicked={handleProductTypeClicked}
            />

            {
              productTypes.map((productType, index) => {
                return (
                  <div key={productType.type}>
                    <ProductTypeButton
                      label={productType.name_en}
                      productType={productType.type}
                      onClicked={handleProductTypeClicked}
                    />
                  </div>
                );
              })
            }
          </div>
        </>
      }
    </>
  )
}
