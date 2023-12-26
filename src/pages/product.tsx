import { useEffect, useState } from "react";
import { HelperProducts } from "../helpers/helperProducts";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IProduct } from "../dataDefinitions/product";

export function ProductPage() {

    const { productID } = useParams();

    const [productInfo, setProductInfo] = useState<IProduct | undefined>(undefined);

    useEffect(() => {

        if (!productID) {
            return;
        }

        setProductInfo(HelperProducts.GetProduct(Number.parseInt(productID)));

    }, [productID]);

    return (
        <Container>
            {productInfo &&
                <>
                    <h1>
                        {productInfo.name_en}
                    </h1>
                </>
            }
        </Container>
    );
}
