import { Button } from "react-bootstrap";
import { ProductType } from "../../dataDefinitions/productType";
import { ProductTypeFilter } from "../../dataDefinitions/collectionFilter";

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
    >
      {label}
    </Button>
  );
}
