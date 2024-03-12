import { Breadcrumbs, Switch } from "@mui/material";
import { Outlet, Route, Routes, useParams, useRoutes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { version } from "react";
import React, { useEffect, useState } from "react";
import AFKVID from "../assets/DOOMSDAY.gif";
import LoadableComponent from "./LoadableComponent";

const Accueil = LoadableComponent(() => import('./Accueil'));
const Admin = LoadableComponent(() => import('./admin/AdminPage'));
const LoginForm = LoadableComponent(() => import('./Connexion'));
const CreateUser = LoadableComponent(() => import('./Inscription'));
const Category = LoadableComponent(() => import('./categorie'));
const ArticleUnique = LoadableComponent(() => import('./Unique'));
const Profile = LoadableComponent(() => import('./user/Profile'));
const Command = LoadableComponent(() => import('./Command'));
const CommandDetail = LoadableComponent(() => import('./CommandDetail'));
const Payment = LoadableComponent(() => import('./Payment'));
const SuccessBuyPanier = LoadableComponent(() => import('./SuccessBuyPanier'));
const PaymentForm = LoadableComponent(() => import('./PaymentForm'));
const Panier = LoadableComponent(() => import('./Panier'));


function AllRoutes() {
  const location = useLocation();
  
  let categorieName = location.pathname.split('/')[3];
  let sous_categorieName = location.pathname.split('/')[4];
  let id = location.pathname.split('/')[5];
  
  function PageNotFound() {
    return (
      <div style={{width:"100%", height:"100vh", overflowY:"hidden"}} onClick={() => window.location = "/"}>
      <img src={AFKVID} height="100%" width="100%"></img>
   {/* <p>404 Page not found</p> */}
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" Component={ Accueil } />

      <Route path="/admin/*" Component={ Admin } />

      <Route path="/articles" Component={ Accueil } />


      <Route path="/login" Component={ LoginForm } />
      <Route path="/inscription" Component={ CreateUser } />  
      <Route path="/panier" Component={ Panier }/>

      <Route path="/signin" Component={ LoginForm } />
      <Route path="/signup" Component={ CreateUser } />

      <Route
        path="/articles/search/:categorie/:sub_categorie"
        Component={ Category }
      />
      <Route
        path="/articles/search/:categorie/:sub_categorie/:id"
        Component={ ArticleUnique }
      />
      <Route path="/myprofile" Component={ Profile }/>
      <Route path="/command" Component={ Command }/>
      <Route path="/command/detail/:id"Component={ CommandDetail }/>
      <Route path="/articles/search/:categorie/:sub_categorie/:id/payment" element={< Payment options={{
        categorieName: categorieName,
        sous_categorieName: sous_categorieName,
        id: id
      }} />} />
      <Route path="/success/:token" Component={Payment}/>

      <Route path="/successBuyPanier/:id" Component={ SuccessBuyPanier }/>
      <Route path="/paymentForm/:categorie/:sub_categorie/:id" element={ < PaymentForm categorie={location.pathname.split('/')[2]} sous_categorie={location.pathname.split('/')[3]} id={location.pathname.split('/')[4]}/>} />
      <Route path="/*" element={<PageNotFound />}
      />
    </Routes>
  );
}

export default AllRoutes;