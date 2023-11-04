import { useEffect, useState} from "react"
import Swal from 'sweetalert2'
import axios from "axios"
const apiUrl = 'http://localhost:3001/api/fetchShop'; 

const ShopBanner_coms = () => {
    const [shopname, setShopname] = useState('');
    const [productID, setProductID] = useState('');
    const [productID1, setProductID1] = useState('');
    const [description, setDescription] = useState('');
    const [responseData1, setResponseData1] = useState([]);
    const [responseData2, setResponseData2] = useState([]);
    
    const data_body = {
        Username: sessionStorage.getItem('Username'),
        Password: sessionStorage.getItem('Password'),
    };
    useEffect(() => {
        const FetchShopData = async () => {
          try {
            const response = await axios.post(apiUrl, data_body);
            setResponseData1(response.data.data.shopdata);
            setResponseData2(response.data.data.productdata);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        FetchShopData();
      }, []);

      useEffect(() => {
        if (responseData1.length > 0 ) {
          const shops = responseData1[0];
          setShopname(shops.Shopname);
          setDescription(shops.Description);
        }
      }, [responseData1]);

      
      const handleDelete = async () => {
        try {
          const DeleteProduct = await axios.delete(`http://localhost:3001/api/deleteProduct/${productID}`);
          console.log (productID)
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              setTimeout(() => {window.location.href = '/manageshop';}, 1000);
            }
          })
        } catch (error) {
          console.error('Error Enter Edit:', error);
        }
      };

     
      const handdleEdit = async (event, productId) => {
        try {
            console.log(productId);
            sessionStorage.setItem('ProductID', productId);
            // const EditProduct =await axios.put(`http://localhost:3001/api/editProduct/${productId}`);
            if (productId !== ''){
                window.location.href = '/editproduct';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    
  return (
    <>
      <div className="relative overflow-hidden bg-gray-100 pb-20 pt-24 mt-16 lg:pb-24 h-screen ">
          <div className="mx-auto max-w-full lg:max-w-none">
          <div className="mx-auto lg:ml-[25rem] lg:items-center">
          <div className="relative z-10 -mx-4 shadow-xl ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-3/4 lg:flex-none">
            <div className="relative bg-white  py-10 sm:rounded-3xl sm:px-10">
            <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8">
                  <div className="flex items-center justify-center gap-10  row-1">
                     <div className="col-2 ">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg" alt="" className="w-96"  />
                     </div>
                <div className="2"><p className='text-lg font-medium mt-3'>{shopname}</p>
                     <p className='text-base font-light mt-3'>{description}</p>
                     <button className= 
                  "flex mt-5 mr-auto  justify-center rounded-md  px-5 py-2 text-black shadow-lg text-sm font-semibold leading-6 hover:text-white  hover:bg-black ">
                  <a href="/editshop" >
                    Create shop
                  </a>
                </button>
                     </div>
                </div>
                
               

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default ShopBanner_coms;