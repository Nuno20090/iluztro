import { useEffect, useState } from "react";
import { ICollection } from "../data/collections";
import { HelperCollections } from "../helpers/helperCollections";
import { IProduct } from "../data/products";
import { HelperProducts } from "../helpers/helperProducts";
import { ProductComponent } from "../components/product";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export function CollectionPage() {

  const [collectionPageInfo, setCollectionPageInfo] = useState<ICollection | undefined>(undefined);
  const [collectionProducts, setCollectionProducts] = useState<IProduct[]>([]);

  const { collectionID } = useParams();

  useEffect(() => {

    if (!collectionID) {
      return;
    }

    setCollectionPageInfo(HelperCollections.GetCollectionPage(Number.parseInt(collectionID)));
    setCollectionProducts(HelperProducts.GetCollectionProducts(Number.parseInt(collectionID)));

  }, [collectionID]);

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
      <ProductComponent productID={product.id}></ProductComponent>
    )
  }

  return (
    <Container>

      <h1 className="mt-md-3">
        {collectionPageInfo?.name_en}
      </h1>
      
      
      <div className="collection-filters">
        Collecion Filters will be here
      </div>

      <div className="collection-products">
        {randerProducts()}
      </div>

    </Container>
  );
}
