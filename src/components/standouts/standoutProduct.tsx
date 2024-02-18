import { useEffect, useState } from "react";
import { ISellableItem } from "../../dataDefinitions/sellableItem";
import { IStandout } from "../../dataDefinitions/standouts";
import { HelperProducts } from "../../helpers/helperProducts";
import { Link } from "react-router-dom";
import { ImagePaths } from "../../library/imagesPaths";
import { ProductTypeColor } from "../../library/productTypeColor";
import { HelperProductTypes } from "../../helpers/helperProductTypes";

interface StandoutProductParams {
    standout: IStandout;
}

export function StandoutProduct({ standout }: StandoutProductParams) {

    const [productInfo, setProductInfo] = useState<ISellableItem | undefined>();
    const [productPhoto, setProductPhoto] = useState<string>("");
    const [productUrl, setProductUrl] = useState<string>("");

    useEffect(() => {
        setProductInfo(HelperProducts.GetSellableItem(standout.itemID, standout.variantID));
    }, [standout.itemID]);

    useEffect(() => {
        if (productInfo && productInfo.photos && productInfo.photos.length > 0) {
            setProductPhoto(productInfo.photos[0]);
        }
    }, [productInfo]);

    useEffect(() => {

        if (productInfo) {

            const url = `/product/${productInfo.productID}`;
            if (productInfo.variantID) {
                setProductUrl(`${url}?variantID=${productInfo.variantID}`);
            }
            else {
                setProductUrl(url);
            }
        }
    }, [productInfo]);



    return (
        <div
            style={{
                width: "100%",
                height: "100%"
            }}>
            {productInfo &&
                <Link
                    to={productUrl}
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${ImagePaths.get(productPhoto)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center center",
                                zIndex: -1,
                                filter: 'saturate(66%) contrast(100%) brightness(100%) opacity(100%)',
                            }}
                        />

                        <div
                            style={{
                                top: "0%",
                                left: "0%",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                padding: "1.5rem",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                            }}>

                            <div>
                                <div
                                    style={{
                                        color: "black",
                                        fontSize: "2rem",
                                        backgroundColor: "white",
                                        borderBottom: "4px solid " + ProductTypeColor.GetColor(productInfo.type),
                                        display: "flex",
                                        justifyContent: "space-between",
                                        paddingInline: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "black",
                                            fontSize: "2rem",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {productInfo.productName_en}
                                    </div>
                                    <div
                                        style={{
                                            color: "grey",
                                            fontSize: "1rem",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {HelperProductTypes.GetProductTypeNameSingular(productInfo.type)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>
    );
}