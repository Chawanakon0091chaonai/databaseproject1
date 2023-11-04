
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Editproduct_page = () => {
    const ProductID1 = sessionStorage.getItem('ProductID');
    
    const apiUrl1 = `http://localhost:3001/api/fetchSpecificProduct/${ProductID1}`;
    
    
      const [responseData, setResponseData] = useState([]);
      const [productID, setProductID] = useState('');
      const [productname, setProductname] = useState('');
      const [description, setDescription] = useState('');
      const [cost, setCost] = useState('');
      const [category, setCategory] = useState('');
    
      // const data_body1 = {
      //   Username: sessionStorage.getItem('Username'),
      //   Password: sessionStorage.getItem('Password'),
      // };
      
      const data_body2 = {
        Name: productname,
        Description: description,
        Cost: cost,
        Category: category,
      };
    
      
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(apiUrl1);
            setResponseData(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (responseData.length > 0 ) {
          const products = responseData[0];
          setProductID(products.ProductID);
        }
      }, [responseData]);

      const apiUrl2 = `http://localhost:3001/api/editProduct/${productID}`;
      const UpdateProduct = async () => {
        try {
          const response = await axios.put(apiUrl2, data_body2);
          console.log('API Response:', response.data);
          if (productname !== '' && description !== '' && cost !== '' && category !== '') {
              alert("update successed");
              window.location.href = '/manageshop';
          } else {
              alert("Error");
          }
        } catch (error) {
          console.error('API Error:', error.response.data);
          alert("Error updating product");
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        UpdateProduct();
      };
    
      useEffect(() => {
        if (responseData.length > 0 ) {
          const Products = responseData[0];
          setProductname(Products.Name);
          setDescription(Products.Description);
          setCost(Products.Cost);
          setCategory(Products.Category);
          console.log(productname)
        }
      }, [responseData]);
    
      return (
        <>
          <h1>Product page</h1>
          <div className="container ">
            <div className="row-md-4">
              <div className="col-md-12">Profile Information</div>
    
              <div>
                <h2>Data from Backend:</h2>
    
                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="productname">Productname:</label>
                      
                      <br />
                      <input
                        type="text"
                        id="productname"
                        name="productname"
                        value={productname}
                        onChange={(e) => setProductname(e.target.value)}
                      />
                      <br />
    
                      <label htmlFor="description">Description: </label>
                      <br />
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <br />
                      <label htmlFor="cost">Cost</label>
                      <br />
                      <input
                        type="tel"
                        id="cost"
                        name="cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                      />
                      <br />
                      
                    </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default Editproduct_page;