import { standouts } from "../data/standouts";
import { StandoutCollection } from "../components/standouts/standoutCollection";
import { StandoutProduct } from "../components/standouts/standoutProduct";

export function HomePage() {

    const standoutData = standouts;

    const renderStandouts = () => {

        return <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
            }}>

            {standoutData.standouts.map((standout, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            minWidth: "500px",
                            width: "calc(50% - 5px)",
                            aspectRatio: "2/1",
                            border: "1px solid purple",
                        }}
                    >
                        {standout.itemType === "Collection" &&
                            <StandoutCollection
                                standout={standout}
                            />
                        }

                        {standout.itemType === "Product" &&
                            <StandoutProduct
                                standout={standout}
                            />
                        }
                    </div>
                );
            })
            }
        </div>
    }

    return <div
        style={{
            display: "flex",
            justifyContent: "center",
        }}>
        <div
            style={{
                maxWidth: "1200px",
                marginTop: "2rem"
            }}>
            {renderStandouts()}
        </div>
    </div>
}
