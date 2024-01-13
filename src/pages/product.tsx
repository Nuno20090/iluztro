import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { IProduct } from "../dataDefinitions/product";
import { HelperProductTypes } from "../helpers/helperProductTypes";
import { SellableItemImages } from "../components/sellableItemImages";
import { ProductTypeColor } from "../library/productTypeColor";

export function ProductPage() {

    const { productID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState<IProduct | undefined>(undefined);
    const [sellableItem, setSellableItem] = useState<ISellableItem | undefined>(undefined);

    const getQueryParam = (param: string) => {
        return new URLSearchParams(location.search).get(param);
    };

    const getVariantFromQueryParam = (): number | undefined => {
        const variantID = getQueryParam('variantID');
        return variantID ? Number.parseInt(variantID) : undefined;
    }

    const variantID = getVariantFromQueryParam();

    useEffect(() => {

        if (productID === undefined) {
            return;
        }

        setSellableItem(HelperProducts.GetSellableItem(Number.parseInt(productID), variantID));

    }, [productID, variantID]);

    useEffect(() => {

        if (!productID) {
            return;
        }

        setProductInfo(HelperProducts.GetProduct(Number.parseInt(productID)));

    }, [productID]);

    const handleVariantSelect = (eventKey: string | null) => {
        if (eventKey === null) {
            return;
        }

        const variantID = Number.parseInt(eventKey || "0");
        navigate(`/product/${productID}?variantID=${variantID}`);
    };

    const getSelectedVariantName = (): string => {
        if (productInfo === undefined || productInfo.variants === undefined || variantID === null) {
            return "";
        }

        const variant = productInfo.variants.find((variant) => variant.id === variantID);
        return variant ? variant.name_en : "";
    }

    const renderProductVariantsDropdown = () => {

        if (!productInfo) {
            return;
        }

        if (productInfo.variants === undefined) {
            return;
        }

        if (productInfo.variants.length < 2) {
            return;
        }

        return (
            <Dropdown
                className="w-100 variants-dropdown larger-text"
                onSelect={handleVariantSelect}
            >
                <Dropdown.Toggle
                    className="product-variant-button"
                    style={{fontSize: "1.2rem"}}
                    variant="light"
                    id="dropdown-basic"
                >
                    {getSelectedVariantName()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        productInfo.variants.map((variant) => {
                            return (
                                <Dropdown.Item
                                    key={variant.id}
                                    eventKey={variant.id}
                                >{variant.name_en}</Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <Container
            className="sellable-item">
            {productInfo && sellableItem &&
                <div className="contents">

                    <div className="sellable-item-header">
                        <h4 
                        className="type"
                        style={{
                            borderBottomColor: ProductTypeColor.GetColor(productInfo.type)
                        }}
                        >
                            {HelperProductTypes.GetProductTypeNameSingular(productInfo.type)}
                        </h4>
                        <h1 className="name">
                            {sellableItem.productName_en}
                        </h1>
                    </div>

                    <div className="item-contents">

                        <div
                            className="image-holder"
                        >
                            <SellableItemImages
                                sellableItem={sellableItem}
                            ></SellableItemImages>
                        </div>

                        <div className="item-info">
                            {renderProductVariantsDropdown()}

                            <p className="item-description">
                                {sellableItem.description_en}
                            </p>

                            <p className="item-price">
                                {`${productInfo.price_eur}€`}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
}
