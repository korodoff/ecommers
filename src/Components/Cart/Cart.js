import styles from './Cart.module.css';
import React, { useState } from 'react';
import { ReactComponent as Right } from "../../Resources/image/arrowRight.svg";
import { ReactComponent as Cross } from "../../Resources/image/cross.svg";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCart from '../../Containers/AnimatedPage/AnimatedCart';
import AnimatedCard from '../../Containers/AnimatedPage/AnimatedCard';

const Cart = props => {
    const {
        cartAmount,
        cart,
        handleOpenCart,
        handleCloseCart,
        cartDisplayed,
        handleHover,
        hoverState,
        clearCart,
        handleRemoveFromCart,
        openGamePage
    } = props;

    const [total, setTotal] = useState(0);
    let newTotal = 0;
    cart.forEach((item, i) => {
        let priceAsNumber = parseFloat(item.price);
        let currentTotal = parseFloat(newTotal);
        newTotal = (priceAsNumber + currentTotal).toFixed(2);

        if (i === cart.length) {
            setTotal(newTotal);
        }
    })

    // const variants = {
    //     initial: { x: 100 },
    //     animate: { x: 0, transition: {  x: { type: "spring", duration: 1.2, bounce: 0.4 }} },
    //     exit: { x: 100, transition: {  x: { type: "spring", duration: 1.2, bounce: 0.575 }} },
    // }

    return (
        <div className={styles.cartWindow}>
                <div className={styles.back} onClick={handleCloseCart}>
    
                </div>
            {/* <AnimatedCart> */}
                    <div 
                      className={styles.cart} 
                      style={{ backgroundColor: "#1A1A1A", height: "100vh" }}
                    >
                        <div className={styles.top}>
                            <div className={styles.topHeader}>
                                <h2>{cartAmount >= 1 ? cartAmount > 1 ? `${cartAmount} games` : "1 game" : "No games added"}</h2>
                                <h3 onClick={clearCart}>{cartAmount >= 1 ? "Clear" : ""}</h3>
                            </div>
            
                            <div className={styles.topGames}>
                                {cart.map((item, i) => {
                                    return <div 
                                             className={styles.item} 
                                             key={i} 
                                            //  variants={variants} 
                                            //  initial="initial" 
                                            //  animate="animate" 
                                            //  exit="exit"
                                            >
                                              <h3 id={item.surname} onClick={openGamePage}>{item.name}</h3>
                                              <div>
                                                  ${item.price}
                                                  <button id={item.id} onClick={handleRemoveFromCart} className={styles.removeButton} aria-label="Close">
                                                      <Cross className={styles.cross} />
                                                  </button>
                                              </div>
                                            </div>
                                            {/* </motion.div> */}
                                })}
                            </div>
                        </div>
            
                        <div 
                          className={styles.bottom}  
                          style={{ width: "87.5%" , display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                                <h3>Total: ${newTotal}</h3>
                                <button 
                                  id="24" 
                                  onMouseEnter={handleHover} 
                                  onMouseLeave={handleHover} 
                                  style={{ color: hoverState[24].hovered ? "#92f" : "#fff" }} 
                                  aria-label="Checkout"
                                >
                                    Checkout
                                    <Right 
                                      className={styles.right}
                                      style={{ fill: hoverState[24].hovered ? "#92f" : "#fff" }}
                                    />
                                </button>
                        </div>
                    </div>
                    {/* </AnimatedCart> */}
        </div>
    );
  }
  
  export default Cart;

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import {delItem} from '../../redux/actions/index'
// import { NavLink } from 'react-router-dom'


// const Cart = () => {
//     const state = useSelector((state)=> state.addItem)
//     const dispatch = useDispatch()

//     const handleClose = (item) => {
//         dispatch(delItem(item))
//     }

//     const cartItems = (cartItem) => {
//         return(
//             <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
//                 <div className="container py-4">
//                     <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
//                     <div className="row justify-content-center">
//                         <div className="col-md-4">
//                             <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
//                         </div>
//                         <div className="col-md-4">
//                             <h3>{cartItem.title}</h3>
//                             <p className="lead fw-bold">${cartItem.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     const emptyCart = () => {
//         return (
//             <div className="px-4 my-5 bg-light rounded-3 py-5">
//                 <div className="container py-4">
//                     <div className="row">
//                         <h3>Your Cart is Empty</h3>
//                     </div>
//                     </div>
//                 </div>
//         );
//     }

//     const button = () => {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {state.length === 0 && emptyCart()}
//             {state.length !== 0 && state.map(cartItems)}
//             {state.length !== 0 && button()}
//         </>
//     )
// }

// export default Cart