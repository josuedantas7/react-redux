import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";

// Utilities

const ProductItem = ({ product }) => {


  const dispatch = useDispatch()


  const handleAddProduct = (product) => {

    console.log('ativando handleAddProduct')

    const dispatchObj = {
      type: 'addProduct/cart',
      payload: product
    }


    dispatch(dispatchObj)
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
          <p onClick={() => handleAddProduct(product)}>Adicionar ao carrinho</p>
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
