// import React, { useState } from 'react';
import styles from './Home.module.css';

import { ReactComponent as Enter } from "../../Resources/image/enter.svg";

import { NavLink,  } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';

// import games from '../../utils/games';

const Home = props => {
  const {
    
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart,
    hoverState,
    setHoverState,
  
    // setOverlap,
    openGamePage
  } = props;

  // const [ setBrowsing] = useState(false);
  // const [landingPage, setLandingPage] = useState(true);

  // const navigate = useNavigate();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([
        ...hoverState, hoverState[e.target.id] = newHoverState
    ]);
  }

  // const handleBrowse = () => {
  //   setOverlap(true);
  //   setTimeout(() => {
  //     setBrowsing(true);
  //     navigate('/react-ecommerce-store/browse');
  //   }, 1500);
  // }

  // const handleHome = () => {
  //   setBrowsing(false);
  //   navigate('/');
  // }

  // const handleNavGamePage = () => {
  //   setHoverState([...hoverState, hoverState[21].hovered = false]);
  //   navigate('/react-ecommerce-store/games/riseofthetombraider');
  // }
  
  // const handleNavNotFoundPage = () => {
  //   navigate('/react-ecommerce-store/this-page');
  // }
  
  // const handleNavNotFoundQuery = () => {
  //   navigate('/react-ecommerce-store/games/404');
  // }
  
  // const handlePlayDice = () => {
  //   let randomIndex = Math.floor(Math.random() * 32);
  //   let randomSurname = games[randomIndex].surname;
  //   setOverlap(true);
  //   setTimeout(() => {
  //     setBrowsing(true);
  //     navigate(`/react-ecommerce-store/games/${randomSurname}`);
  //   }, 1500);
  // }

  // const variants = {
  //   hidden: { opacity: 1, x: -150 },
  //   visible: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: 150 },
  // }

  // const buttonVariants = {
  //   hidden: { opacity: 0, y: 900 },
  //   visible: { opacity: 1, y: 0, transition: {  y: { type: "tween", duration: 1.5, bounce: 0.3 }} },
  // }

  return (
    <div className={styles.main}>
      {/* {overlap ? 
          <motion.div 
            className={styles.overlap}
            // variants={buttonVariants}
            // initial="hidden"
            // animate="visible"
          >
    
          </motion.div> 
      : null} */}

      {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed} 
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
              handleHover={handleHover}
              hoverState={hoverState}
              clearCart={clearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              openGamePage={openGamePage}
      /> : null}
        <div className={styles.home}>

                <video autoPlay muted loop className={styles.video}>
                  <source src={require("../../Resources/image/pyke.mp4")} type="video/mp4" />
                </video>

                
                <div className={styles.container}>
                    <div className={styles.left}>
                       <div><h1>Game Store</h1></div><br/>
                        <div className={styles.buttons}>
                          <NavLink to="/react-ecommerce-store/browse">
                              <span className={`${styles.cta} ${styles.browseBtn}`}  aria-label="Browse">
                                <Enter className={styles.ctaSVG} />
                                Browse
                              </span>
                              </NavLink>
                             
                        </div>
                    </div>
    
                   
                </div>
        </div>
    </div>
  );
}

export default Home;