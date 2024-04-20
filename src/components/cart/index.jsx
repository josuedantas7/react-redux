// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from '../cart-item/index.jsx'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);


  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ): (
        <p>Seu carrinho está vazio</p>
      )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
