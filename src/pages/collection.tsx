import { useEffect, useState } from "react";
import { ICollectionPage } from "../data/collections";
import { HelperCollections } from "../helpers/helperCollections";
import { IProduct } from "../data/products";
import { HelperProducts } from "../helpers/helperProducts";

interface CollectionPageParams {
    collectionID: number;
}

export function CollectionPage({
    collectionID
} : CollectionPageParams) {

    const [collectionPageInfo, setCollectionPageInfo] = useState<ICollectionPage | undefined>(undefined); 
    const [collectionProducts, setCollectionProducts] = useState<IProduct[]>([]);

    useEffect(() => {

        setCollectionPageInfo(HelperCollections.GetCollectionPage(collectionID));
        setCollectionProducts(HelperProducts.GetCollectionProducts(collectionID));

    }, [collectionID]);

    const randerProducts = () => {
        return <div>
            Products ({collectionProducts.length})
        </div>
    }


    return <div>
        <h1>
            {collectionPageInfo?.name}
        </h1>

        <div>
            {randerProducts()}
        </div>
    </div>;
}
