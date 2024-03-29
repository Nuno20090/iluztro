import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { IProduct } from "../dataDefinitions/product";
import { HelperProductTypes } from "../helpers/helperProductTypes";
import { SellableItemImages } from "../components/sellableItemImages";
import { ProductTypeColor } from "../library/productTypeColor";
import { ICartItem } from "../dataDefinitions/cartItem";

interface ProductPageParams {
    addCartItem: (productID: number, variantID: number | undefined) => void;
    cartItems: ICartItem[];
}

export function ProductPage(
    {
        addCartItem,
        cartItems
    }: ProductPageParams) {

    const { productID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState<IProduct | undefined>(undefined);
    const [sellableItem, setSellableItem] = useState<ISellableItem | undefined>(undefined);
    const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
    const [inCartMessage, setInCartMessage] = useState<string>("Already in cart");

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

    useEffect(() => {

        if (productInfo === undefined) {
            return;
        }

        if (cartItems === undefined) {
            return;
        }

        const productInCart = cartItems.find((cartItem) => cartItem.productID === productInfo.id);
        setIsProductInCart(productInCart !== undefined);

    }, [cartItems, productInfo]);

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

    const handleAddToCart = (productInfo: IProduct) => {
        addCartItem(productInfo.id, variantID);
        setInCartMessage("Added to cart");
        setIsProductInCart(true);
    };

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
                    style={{ fontSize: "1.2rem" }}
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

                            {isProductInCart && <p className="in-cart">
                                <Button
                                    disabled
                                    variant={'outline-primary'}
                                    className="larger-text"
                                    style={{
                                        width: "100%",
                                        border: "1px solid black"
                                    }}
                                >
                                    {inCartMessage}
                                </Button>
                            </p>}
                            {isProductInCart === false &&
                                <Button
                                    variant={'outline-primary'}
                                    onClick={() => {
                                        handleAddToCart(productInfo);
                                    }}
                                    className="larger-text"
                                    style={{
                                        width: "100%",
                                        border: "1px solid black"
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
}
