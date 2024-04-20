import { useState, useEffect } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);


  const { currentUser } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch()


  function handleLoginClick(){


    const dispatchObj = {
      type: 'user/login',
      payload: { name: 'Josué', age:25 }
    }

    dispatch(dispatchObj)
  }

  function handleLogoutClick(){
    const dispatchObj = {
      type: 'user/logout',
    }

    dispatch(dispatchObj)
  }

  useEffect(() => {
    console.log('CurrentUser', currentUser)
  },[currentUser])

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
