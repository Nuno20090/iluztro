import { useEffect, useState } from "react";
import { ISellableItem } from "../dataDefinitions/sellableItem";


interface SellableItemImagesParams {
    sellableItem: ISellableItem;
}

export function SellableItemImages({ sellableItem }: SellableItemImagesParams) {

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [imageCount, setImageCount] = useState<number>(0);

    const photos = sellableItem?.photos;

    useEffect(() => {
        setImageCount(sellableItem?.photos?.length || 0);
    }, [sellableItem]);

    const adjustPathToImages = (path: string): string => {

        const result = process.env.PUBLIC_URL + "/" + path;
        return result;
    }

    return (

        <div>

            {photos && photos.length > 0 &&

                <div>
                    <div className="image-container-regular">

                        {/* Show the selected image */}
                        <img
                            src={adjustPathToImages(photos[selectedImageIndex])}
                            alt={""}
                            className="image-contained"
                            width="200"
                            height="200"
                            onClick={() => { }}
                        />
                    </div>

                    {/* Show all the available images */}
                    {
                        imageCount > 1 &&
                        <div
                            style={{
                                paddingTop: "1rem",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "flex-start",
                                gap: "1rem",
                                width: "100%",
                            }}
                        >

                            {
                                photos.map((photo, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => { setSelectedImageIndex(index) }}
                                            style={{ cursor: "pointer" }}>

                                            <img
                                                className={index === selectedImageIndex ? "image-selected" : "image-not-selected"}
                                                src={adjustPathToImages(photo)}
                                                alt={photo}
                                                width="55x"
                                                height="55px"
                                                onClick={() => setSelectedImageIndex(index)}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }

                </div>
            }
        </div>

    );
}