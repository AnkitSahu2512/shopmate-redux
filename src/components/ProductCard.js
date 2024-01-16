import "./ProductCard.css";
import {add, remove} from "../store/cartSlice"
import { useDispatch , useSelector} from "react-redux";
import { useEffect ,useState} from "react";

export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const dispatch = useDispatch();
  const fetchCart = useSelector(state=>state.cartState.cartList);
  const [incart,setInCart]= useState(false);

  useEffect(()=>{
    const ProductinCart = fetchCart.find(item=>item.id===id)
    if(ProductinCart){
      setInCart(true);
    }
    else{
      setInCart(false);
    }
  },[fetchCart]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {incart? (<button onClick={()=> dispatch(remove(product))}>Remove From Cart</button>):

        (<button onClick={()=> dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
