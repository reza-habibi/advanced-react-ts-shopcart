import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../../App";
// Styles
import { Wrapper } from "./Product.style";

type Props = {
  product: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(product)}> Add To Cart </Button>
    </Wrapper>
  );
};

export default Product;
