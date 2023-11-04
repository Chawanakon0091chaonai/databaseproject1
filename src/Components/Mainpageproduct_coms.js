
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const apiUrl1 = 'http://localhost:3001/api/main';
const apiUrl2 = 'http://localhost:3001/api/addProduct_cart';



const Maincompo = () => {
    const [responseData, setResponseData] = useState([]);
    const [productID, setproductID] = useState('');
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(apiUrl1)
                
                setResponseData(response.data.data);
                console.log(response.data.data);
                
                // console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getProducts();
    }, []);
    
    const Addtoproduct = async (event, productId) => {
        try {
          setproductID(productId);
          sessionStorage.setItem('ProductID', productId); // Use the updated productId here
      
          const data_body = {
            Username: sessionStorage.getItem('Username'),
            Password: sessionStorage.getItem('Password'),
            ProductID: productId, // Use the updated productId here
          };
      
          if (productId !== '') {
            const response = await axios.post(apiUrl2, data_body);
            console.log('Product added successfully', response);
          }
        } catch (error) {
          console.error('Error Adding data:', error);
        }
      };
    return (
        <>
             <div className="bg-neutral-200">
                
               <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Products</h2>
          
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {responseData.map((products, index) => (
                      <a key={products.ProductID} href={products.href} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'}
                            alt={products.imageAlt}
                            onClick={(event) => Addtoproduct(event, products.ProductID)}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <p className="mt-4 text-lg text-gray-700">{products.Name}</p>
                        <p className="mt-1 text-sm text-gray-500">{products.Category}</p>
                        <p className="mt-1 text-xl font-medium text-gray-900">฿{products.Cost}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
        </>
    );
};

export default Maincompo;
