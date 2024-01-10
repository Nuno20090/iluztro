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
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "#faebd7",
                            padding: "3rem"
                        }}>
                            <p className="collection-description">
                                {collectionPageInfo.description_en}
                            </p>
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
