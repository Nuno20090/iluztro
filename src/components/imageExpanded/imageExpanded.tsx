import { Modal } from "react-bootstrap";
import { ImagePaths } from "../../library/imagesPaths";

interface ImageExpandedParams {
  modelName: string;
  photos: string[];
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
  hideImageExpanded: () => void;
}

export function ImageExpanded({
  modelName,
  photos,
  selectedImageIndex,
  setSelectedImageIndex,
  hideImageExpanded,
}: ImageExpandedParams): JSX.Element {

  return <Modal
    className="image-expanded"
    show={true}
    onHide={() => { hideImageExpanded() }}
    fullscreen={true}
  >
    <Modal.Header closeButton>
      <Modal.Title>{modelName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <div
        className="content-organizer"
      >
        <div
          onClick={() => { hideImageExpanded() }}
          className="image-holder"
        >
          <img
            className="image"
            src={ImagePaths.get(photos[selectedImageIndex])}
            alt={photos[selectedImageIndex]}
          />
        </div>

        <div
          className="gallery-holder"
        >
          {/* Show all the available images */}
          {
            photos.length > 1 &&
            <div
              className="gallery"
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
      </div>
      {/* </div > */}
    </Modal.Body>
  </Modal>
}

