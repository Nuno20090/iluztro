import { useEffect, useState } from "react";
import { IStandout } from "../../dataDefinitions/standouts";
import { HelperCollections } from "../../helpers/helperCollections";
import { ICollection } from "../../dataDefinitions/collection";
import { ImagePaths } from "../../library/imagesPaths";

interface StandoutCollectionParams {
    standout: IStandout;
}

export function StandoutCollection({ standout }: StandoutCollectionParams) {

    const [collectionInfo, setCollectionInfo] = useState<ICollection | undefined>();

    useEffect(() => {
        setCollectionInfo(HelperCollections.GetCollectionInfo(standout.itemID));

    }, [standout.itemID]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%"
            }}>
            {collectionInfo &&
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",

                    }}
                >
                    <div
                        //className="collection-description-holder"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${ImagePaths.get(collectionInfo.image)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: "center center",
                            filter: 'saturate(100%) contrast(100%) brightness(100%) opacity(80%)',
                        }}
                    />




                    <div
                        style={{
                            position: "absolute",
                            top: "80%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "black",
                            fontSize: "2rem",
                            width: "90%",
                            backgroundColor: "white",
                        }}
                    >
                        {collectionInfo.name_en} Collection
                    </div>
                </div>
            }
        </div>
    );
}