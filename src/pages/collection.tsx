import { useEffect, useState } from "react";
import { HelperCollections } from "../helpers/helperCollections";
import { HelperProducts } from "../helpers/helperProducts";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ICollection } from "../dataDefinitions/collection";
import { CollectionFilterComponent } from "../components/collectionFilter";
import { ProductTypeFilter } from "../dataDefinitions/collectionFilter";
import { SellableItemPreviewComponent } from "../components/sellableItemPreview";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { ImagePaths } from "../library/imagesPaths";
import { relative } from "path";

export function CollectionPage() {

  const [collectionPageInfo, setCollectionPageInfo] = useState<ICollection | undefined>(undefined);

  const [sellableItems, setSellableItems] = useState<ISellableItem[]>([]);
  const [productsFilter, setProductsFilter] = useState<ProductTypeFilter>("All");

  const { collectionID } = useParams();

  useEffect(() => {

    if (!collectionID) {
      return;
    }

    setCollectionPageInfo(HelperCollections.GetCollectionPage(Number.parseInt(collectionID)));

    let sellableItems = HelperProducts.GetSellableItems(Number.parseInt(collectionID));

    let visibleSellableItems = sellableItems.filter((sellableItem) => {
      return sellableItem.type === productsFilter || productsFilter === "All"
    });

    setSellableItems(visibleSellableItems);
  }, [collectionID, productsFilter]);

  const randerSellableItems = () => {
    return (
      <>
        {
          sellableItems.map((sellableItem) => {
            return (
              <div key={`${sellableItem.productID}|${sellableItem.variantID}`}>
                {renderSellableItem(sellableItem)}
              </div>
            );
          })
        }
      </>);
  }

  const renderSellableItem = (sellableItem: ISellableItem) => {
    return (
      <SellableItemPreviewComponent
        productID={sellableItem.productID}
        variantID={sellableItem.variantID}
      ></SellableItemPreviewComponent>
    )
  }

  return (
    <Container>

      {collectionPageInfo &&
        <>
          <h1 className="collection-name">
            {collectionPageInfo.name_en}
          </h1>

          {collectionPageInfo.description_en &&

            <div
              style={{ position: "relative" }}>

              {/* This is just so the div is rendered with the correct dimmensions */}
              <div
                style={{ padding: "3rem" }}>
                <p className="collection-description">
                  {collectionPageInfo.description_en}
                </p>
              </div>

              {/* This is a div to show the image */}
              <div
                className="collection-description-holder"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ImagePaths.get(collectionPageInfo.image)})`,
                  backgroundSize: 'cover',
                  backgroundPosition:"center center",
                  filter: 'saturate(10%) contrast(100%) brightness(60%) opacity(20%)',
                }}
              />
              
              {/* This is the div that will actually show the text */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}>

                <div
                  style={{ padding: "3rem" }}>
                  <p className="collection-description">
                    {collectionPageInfo.description_en}
                  </p>
                </div>

              </div>

              


              {/* <img
              src={ImagePaths.get(collectionPageInfo.image)}
              alt={""}
              className="image-contained"
              width="100%"
              height="100%"
              /> */}


            </div>
          }

          <div className="collection-filters">
            <CollectionFilterComponent
              collectionID={collectionPageInfo.id}
              onFilterChanged={
                (productType) => {
                  setProductsFilter(productType);
                }
              }
            />
          </div>

          <div className="collection-products">
            {randerSellableItems()}
          </div>
        </>
      }
    </Container>
  );
}
