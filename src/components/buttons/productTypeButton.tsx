import { Button } from "react-bootstrap";
import { ProductTypeFilter } from "../../dataDefinitions/collectionFilter";
import { ProductTypeColor } from "../../library/productTypeColor";

interface ProductTypeButtonParams {
  label: string;
  productType : ProductTypeFilter;
  onClicked : (productType : ProductTypeFilter) => void;
}

export function ProductTypeButton({ 
  label,
  productType,
  onClicked
 } : ProductTypeButtonParams) {

  const handleClick = () => {
    onClicked(productType);
  };

  return (
    <Button
      variant={'outline-primary'}
      onClick={handleClick}
      className="larger-text"
      style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "3px",
        borderBottomColor: ProductTypeColor.GetColor(productType)
      }}
    >
      {label}
    </Button>
  );
}
