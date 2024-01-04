import { ISellableItem } from "../../dataDefinitions/sellableItem";
import { ImagePaths } from "../../library/imagesPaths";

interface ImageExpandedParams {

    photos: string[];
    selectedImageIndex: number;
    setSelectedImageIndex: (index: number) => void;
    hideImageExpanded: () => void;
}


export function ImageExpanded({
    photos,
    selectedImageIndex,
    setSelectedImageIndex,
    hideImageExpanded
}: ImageExpandedParams): JSX.Element {


    return <div
        className="image-expanded-overlay"
        onClick={() => { hideImageExpanded() }}
    >
        <div
            style={{
                backgroundColor: "purple",
                width: "calc(100% - 200px)",
                height: "calc(100% - 200px)",
                aspectRatio: "1:1",
            }}
        >


            {/* Show the selected image */}
            <div className="image-container-expanded">
                <img
                    src={ImagePaths.get(photos[selectedImageIndex])}
                    alt={""}
                    className="image-contained"
                    onClick={() => { }}
                />
            </div>

            {/* Show all the available images */}
            {
                photos.length > 1 &&
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
                                        src={ImagePaths.get(photo)}
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
    </div >
}