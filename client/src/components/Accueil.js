import '../style/Unique.css';
import '../style/Accueil.css'
import Header from './Header'
import Footer from './Footer'
import Box from '@mui/material/Box';
import MCarousel from './Carousel/Carousel.js'
import Table from './Table/Table'
import { useLocation } from "react-router-dom";
import BreadcrumbsComponent from "./breadcrumbs";
import React, { useEffect, useState } from "react";
import axios from 'axios';

// import {result,noItems,price,countItem,orderId,articlesPanier,setResult,setNoItems,setPrice,setCountItem,setOrderId,setArticlesPanier,calcPrice,calcQuantity} from './StatePanier';


function Accueil() {
  const location = useLocation();

const [result, setResult] = React.useState(0);
const [noItems, setNoItems] = React.useState("");
const [price, setPrice] = React.useState(0);
const [countItem, setCountItem] = React.useState(0);
const [orderId, setOrderId] = React.useState(0);
const [articlesPanier, setArticlesPanier] = useState([]);


const calcQuantity = (id) => {
    axios
      .get(`http://localhost:8000/api/count_item/${id}`)
      .then((response) => {
        setCountItem(response.data['quantity'][0]['count']);
      })
      .catch((error) => {
        console.error('Erreur veuillez vous connecter pour visualiser votre panier : ', error.response.data);
      });
  
      console.log("in quantity function "+countItem);
  }

  const calcPrice = (ArticlesToGetPrice) => {
    var price_calc = 0;
    for (let count = 0; count < ArticlesToGetPrice.length; count++) {
      const element = ArticlesToGetPrice[count];
      price_calc += element.quantity * element.unit_price;
    }
    setPrice(price_calc);
    
    return price_calc;
  }

  return (
    <div>
      <Header articlesPanier={articlesPanier} setArticlesPanier={setArticlesPanier}  calcQuantity={calcQuantity} orderId={orderId} setOrderId={setOrderId} calcPrice={calcPrice} countItem={countItem} setCountItem={setCountItem} price={price} setPrice={setPrice} noItems={noItems} setNoItems={setNoItems} result={result} setResult={setResult}/>
      <BreadcrumbsComponent navigation={location} />
      <div className="carrousel">
          <MCarousel  width="100%" height="100%"/>
      </div>
      
      <Box padding={2}/>
        <Table articlesPanier={articlesPanier} setArticlesPanier={setArticlesPanier}  calcQuantity={calcQuantity} orderId={orderId} setOrderId={setOrderId} calcPrice={calcPrice} countItem={countItem} setCountItem={setCountItem} price={price} setPrice={setPrice} noItems={noItems} setNoItems={setNoItems} result={result} setResult={setResult}></Table>
      
      <Box padding={2}/>
      <Footer />
    </div>
  );
}

export default Accueil;
