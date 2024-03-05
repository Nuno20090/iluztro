import { standouts } from "../data/standouts";
import { StandoutCollection } from "../components/standouts/standoutCollection";
import { StandoutProduct } from "../components/standouts/standoutProduct";

export function HomePage() {

    const standoutData = standouts;

    const renderStandouts = () => {

        return <div className="standouts-container">
            {standoutData.standouts.map((standout, index) => {
                return (
                    <div
                        key={index}
                        className="standout-item"
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
                marginTop: "2rem",
                marginBottom: "7rem"
            }}>
            {renderStandouts()}
        </div>
    </div>
}
