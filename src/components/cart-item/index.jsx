import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {


  const dispatch = useDispatch();

  const handleRemoveClick = (product) => {

    const obj = {
      type: 'removeProdut/cart',
      payload: product
    }

    dispatch(obj)
  };

  const handleIncreaseClick = (product) => {
      
      const obj = {
        type: 'addProduct/cart',
        payload: product
      }
  
      dispatch(obj)
  };

  const handleDecreaseClick = (product) => {
    const obj = {
      type: 'removeOneProduct/cart',
      payload: product
    }

    dispatch(obj)
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={() => handleDecreaseClick(product)}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={() => handleIncreaseClick(product)}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={() => handleRemoveClick(product)}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
