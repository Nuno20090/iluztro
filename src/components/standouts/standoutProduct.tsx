import { IStandout } from "../../dataDefinitions/standouts";

interface StandoutProductParams {
    standout: IStandout;
}

export function StandoutProduct({ standout }: StandoutProductParams) {
    return (
        <div>
            <h2>Product {standout.itemID} {standout.isNew ? "New" : "Not"}</h2>
        </div>
    );
}