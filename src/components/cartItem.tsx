import { Button } from "react-bootstrap";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { HelperProducts } from "../helpers/helperProducts";
import { useEffect, useState } from "react";
import { HelperCollections } from "../helpers/helperCollections";
import { ImagePaths } from "../library/imagesPaths";
import { SellableItemPath } from "../library/sellableItemLink";
import { Link } from "react-router-dom";

interface CartItemParams {
    productID: number;
    variantID: number | undefined;
    removeCartItem: (productID: number, variantID: number | undefined) => void;
}

export function CartItem({
    productID,
    variantID,
    removeCartItem
}: CartItemParams) {

    const [sellableItem, setSellableItem] = useState<ISellableItem | undefined>(undefined);

    useEffect(() => {

        if (productID === undefined) {
            return;
        }

        setSellableItem(HelperProducts.GetSellableItem(productID, variantID));

    }, [productID, variantID]);

    const renderImage = () => {

        const defaultImageElem = <div className="image-holder" style={{ width: "100px" }}></div>;

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
                        width: '100px',
                        height: '100%',
                    }}
                />
            </div>
        )
    }


    return <div
        style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            borderBottom: "1px solid black"
        }}
    >
        {sellableItem &&
            <div
                style={{
                    width: "100%",
                    paddingBottom: "1rem"
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-end"
                    }}>

                    <Link
                        to={SellableItemPath.getPath(sellableItem)}
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}>
                            <div>
                                {HelperCollections.GetCollectionInfo(sellableItem.collectionID).name_en}
                            </div>
                            <h2>
                                {sellableItem.productName_en}
                            </h2>
                        </div>

                    </Link>

                    <h3>
                        {sellableItem.price_eur}€
                    </h3>


                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "end",
                    }}
                >
                    <Link
                        to={SellableItemPath.getPath(sellableItem)}
                        style={{ textDecoration: 'none', color: 'inherit' }}>

                        {renderImage()}
                    </Link>

                    <div>

                        <Button
                            variant={'primary'}
                            onClick={() => {
                                removeCartItem(productID, variantID);
                            }}
                            className="larger-text"
                        >
                            Remove
                            <i className="bi bi-5-circle"></i>
                        </Button>
                    </div>
                </div>
            </div>
        }
    </div>
}

