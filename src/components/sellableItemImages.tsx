import { useEffect, useState } from "react";
import { ISellableItem } from "../dataDefinitions/sellableItem";
import { ImageExpanded } from "./imageExpanded/imageExpanded";
import { ImagePaths } from "../library/imagesPaths";


interface SellableItemImagesParams {
  sellableItem: ISellableItem;
}

export function SellableItemImages({
  sellableItem,
}: SellableItemImagesParams) {

  const [imageCount, setImageCount] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [showImageExpanded, setShowImageExpanded] = useState<boolean>(false);

  const photos = sellableItem?.photos;

  useEffect(() => {
    setImageCount(sellableItem?.photos?.length || 0);
  }, [sellableItem]);

  const handleImageClick = () => {
    setShowImageExpanded(true);
  }

  return (

    <div>

      {photos && photos.length > 0 &&

        <div>
          {/* Show the selected image */}
          <div className="image-container-regular"
            onClick={handleImageClick}>
            <img
              src={ImagePaths.get(photos[selectedImageIndex])}
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

          {/* Show the expanded image */}
          {
            showImageExpanded &&
            <ImageExpanded
              modelName={sellableItem.productName_en}
              photos={photos}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
              hideImageExpanded={() => setShowImageExpanded(false)}
            />
          }
        </div>
      }
    </div>

  );
}