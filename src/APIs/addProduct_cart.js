  
import express from 'express';
import createConnection from './connect.js';

const router_addProduct_cart = express.Router();


router_addProduct_cart.post('/api/addProduct_cart', async (req, res) => {
    const {ProductID,Username,Password} = req.body;
    const cartid = await getCartID(Username,Password);
    const query = "INSERT INTO cart_product (CartID, ProductID) VALUES (?, ?)";
    const values = [cartid,ProductID];
    const db = await createConnection();
    try {
      const results = await db.query(query, values);
      res.status(200).json({ message: "Insert product to cart complete" });
      
    } catch (error) {
      console.error('Database Error:', error);
      res.status(500).json({ error: 'Occur some conflict with adding process' });
    }
   
});

 //get ShopID from Username and Password
 const getCartID = async (Username,Password) => {
    const db = await createConnection();
  
    try {
      const query = 'SELECT CartID FROM users WHERE Username = ? AND Password = ?';
      const value =  [Username, Password];
      const shopid = await db.query(query,value);
      return shopid[0][0].CartID;
    } catch (err) {
      console.error('Error fetching the cart ID:', err);
      return null;
    }
  };

   
  

export default router_addProduct_cart;