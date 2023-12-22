import { useEffect, useState } from "react";
import { ICollection } from "../data/collections";
import { HelperCollections } from "../helpers/helperCollections";
import { IProduct } from "../data/products";
import { HelperProducts } from "../helpers/helperProducts";
import { ProductComponent } from "../components/product";

interface CollectionPageParams {
  collectionID: number;
}

export function CollectionPage({
  collectionID
}: CollectionPageParams) {

  const [collectionPageInfo, setCollectionPageInfo] = useState<ICollection | undefined>(undefined);
  const [collectionProducts, setCollectionProducts] = useState<IProduct[]>([]);

  useEffect(() => {

    setCollectionPageInfo(HelperCollections.GetCollectionPage(collectionID));
    setCollectionProducts(HelperProducts.GetCollectionProducts(collectionID));

  }, [collectionID]);

  const randerProducts = () => {
    return (
      <div>
        {
          collectionProducts.map((product, index) => {
            return (
              <div key={product.id}>
                {renderProduct(product)}
              </div>
            );
          })
        }
      </div>);
  }

  const renderProduct = (product: IProduct) => {
    return (
      <ProductComponent productID={product.id}></ProductComponent>
    )
  }

  return <div>
    <h1>
      {collectionPageInfo?.name_en}
    </h1>

    <div>
      {randerProducts()}
    </div>
  </div>;
}
