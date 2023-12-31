import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

// import router
import router_login from "./login.js";
import router_regist from "./regist.js";
import router_profile from "./profile.js";
import { router_shop } from "./shopEdit.js";
import router_main from "./main.js"
import { router_fetchProfile } from "./editProfile.js";
import { router_updateProfile } from "./editProfile.js";
import router_fetchShop from "./shopProfile.js";
import router_addProduct from "./addProduct.js";
import { router_fetcchProduct } from "./editProduct.js";
import { router_editProduct } from "./editProduct.js";
import { router_fetchPreviousShop } from "./shopEdit.js";
import router_deleteProduct from "./deleteProduct.js";
import { router_fetchSpecificProduct } from "./editProduct.js";
import router_addProduct_cart from "./addProduct_cart.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Add api to server port 3001
app.use(router_login);
app.use(router_regist);
app.use(router_profile);
app.use(router_shop);
app.use(router_main);
app.use(router_fetchProfile);
app.use(router_updateProfile);
app.use(router_fetchShop);
app.use(router_addProduct);
app.use(router_fetcchProduct);
app.use(router_editProduct);
app.use(router_fetchPreviousShop);
app.use(router_deleteProduct);
app.use(router_fetchSpecificProduct);
app.use(router_addProduct_cart);

app.listen(3001, () => {
    console.log(`> Ready on http://localhost:3001`);
  });
  
  