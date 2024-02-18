import { useEffect, useState } from "react";
import { IStandout } from "../../dataDefinitions/standouts";
import { HelperCollections } from "../../helpers/helperCollections";
import { ICollection } from "../../dataDefinitions/collection";
import { ImagePaths } from "../../library/imagesPaths";
import { Link } from "react-router-dom";

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
                <Link
                    to={`/collection/${collectionInfo.id}`}
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${ImagePaths.get(collectionInfo.image)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center center",
                                zIndex: -1,
                                filter: 'saturate(100%) contrast(100%) brightness(100%) opacity(80%)',
                            }}
                        />

                        <div
                            style={{
                                top: "0%",
                                left: "0%",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                padding: "1.5rem",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                            }}>

                            <div
                                style={{
                                    color: "black",
                                    fontSize: "2rem",
                                    backgroundColor: "white",
                                }}
                            >
                                {collectionInfo.name_en} Collection
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>
    );
}