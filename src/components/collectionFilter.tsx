import { useEffect } from "react";
import { HelperProducts } from "../helpers/helperProducts";

interface CollectionFilterProps {
    collectionID : number;
}

export function CollectionFilterComponent(
    {
        collectionID
    }: CollectionFilterProps
) {

    useEffect(() => {

        

        console.log(`Collection ID: ${collectionID}`);
    }, [collectionID]);



    return (
        <div>
            <h1>Collection Filter</h1>
            <p>Collection ID: {collectionID}</p>
        </div>
    )
}
