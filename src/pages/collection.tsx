import { useEffect, useState } from "react";
import { HelperCollections } from "../helpers/helperCollections";
import { HelperProducts } from "../helpers/helperProducts";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IProduct } from "../dataDefinitions/product";
import { ICollection } from "../dataDefinitions/collection";
import { CollectionFilterComponent } from "../components/collectionFilter";
import { ProductTypeFilter } from "../dataDefinitions/collectionFilter";
import { SellableItemPreviewComponent } from "../components/sellableItemPreview";

export function CollectionPage() {

  const [collectionPageInfo, setCollectionPageInfo] = useState<ICollection | undefined>(undefined);

  // Trocar isto por SellableItems!
  const [collectionProducts, setCollectionProducts] = useState<IProduct[]>([]);

  const [productsFilter, setProductsFilter] = useState<ProductTypeFilter>("All");

  const { collectionID } = useParams();

  useEffect(() => {

    if (!collectionID) {
      return;
    }

    setCollectionPageInfo(HelperCollections.GetCollectionPage(Number.parseInt(collectionID)));

    let collectionProducts = HelperProducts.GetCollectionActiveProducts(Number.parseInt(collectionID));
    let visibleCollectionProducts = collectionProducts.filter((product) => {
      return product.type === productsFilter || productsFilter === "All";
    });

    setCollectionProducts(visibleCollectionProducts);

  }, [collectionID, productsFilter]);

  const randerProducts = () => {
    return (
      <>
        {
          collectionProducts.map((product, index) => {
            return (
              <div key={product.id}>
                {renderProduct(product)}
              </div>
            );
          })
        }
      </>);
  }

  const renderProduct = (product: IProduct) => {
    return (
      <SellableItemPreviewComponent productID={product.id}></SellableItemPreviewComponent>
    )
  }

  return (
    <Container>

      {collectionPageInfo &&
        <>
          <h1 className="mt-md-3">
            {collectionPageInfo.name_en}
          </h1>

          <div className="collection-filters">
            <CollectionFilterComponent
              collectionID={collectionPageInfo.id}
              onFilterChanged={
                (productType) => {
                  setProductsFilter(productType);
                }
              } />
          </div>

          <div className="collection-products">
            {randerProducts()}
          </div>
        </>

      }



    </Container>
  );
}
