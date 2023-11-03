import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroImgOne from '../assets/heroImgOne.jpg';
// import { Dropdown } from 'flowbite-react';
import ShopCart from '../assets/ShopCart.png';




export const ShopAll = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleHover = () => {
    setIsHovered(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // End Point
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
        setData(response.data);
        console.log('array', data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  const currentItems = Array.isArray(data)
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const shopALL = Array.isArray(data)
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const paginateShopALL = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Drop down 
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (e) => {
      const selectedId = parseInt(e.target.value);
      const selected = data.find((item) => item.id === selectedId);
      setSelectedItem(selected);
    };
    // open List
      const [isListOpen, setIsListOpen] = useState(false);
    
      const toggleList = () => {
        setIsListOpen(!isListOpen);
      };
    // On Sale 
    // const onSale = (e) => {
    //   const {onSaleID} = useParams();
    //   const onSaleSelecte = data.find((item) => item.id === parseInt(onSaleID));
    //   setSelectedItem(selected);
    // };

    //SEARCH
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setInput(inputValue);
    
      const filtered = data.filter((search) => search.title.includes(inputValue));
      setFilteredData(filtered);
    };
    

  return (
    <>
    <div className='bg-[#FEFAF0]'>

      <h3 className='text-center pt-24 pb-12 text-[3rem]'>SHOP ALL</h3>


      <div className='flex flex-row-reverse justify-center align-cemter gap-8 pb-24'>
        {/* Dropdown menu */}
              <div className='flex justify-center align-center'>
                  <select
                    onChange={handleItemClick}
                    className="px-2 text-[#403F2B] bg-[#FEFAF0] md:border-2 md:border-[#403F2B] hover:bg-[#403F2B] hover:text-[#FEFAF0] hover:border-[#403F2B]  font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <option value="">Category</option>
                    {data.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="block px-4 py-4 hover:bg-white focus:outline-none dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item.id} 
                      </option>
                    ))}
                  </select>
              </div>
              <div className='flex justify-center align-center'>
                  <select
                    onChange={handleItemClick}
                    className="px-4 text-[#403F2B] bg-[#FEFAF0] md:border-2 md:border-[#403F2B] hover:bg-[#403F2B] hover:text-[#FEFAF0] hover:border-[#403F2B]  font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <option value="">Price</option>
                    {data.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="block px-4 py-4 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item.id}
                      </option>
                    ))}
                  </select>
              </div>
        
        {/* Search Field  */}
        
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type='text' value={input}
  onChange={handleInputChange} id="default-search" class="block w-full p-4 pl-10 text-sm  text-[#403F2B] border border-[#403F2B] rounded-lg bg-[#FEFAF0] " placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white  md:border-2 md:border-[#403F2B] absolute right-2.5 bottom-2.5 bg-[#403F2B] hover:bg-[#FEFAF0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

    </div>

        {/* Card */}
        <div className='flex justify-center flex-center flex-wrap gap-x-24'>
        { !selectedItem && shopALL.map( (item, userId) => (
                <div className='flex flex-col justify-center'>
                    <div class="mb-4 max-w-[16rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/product/${data.id}`}>
                            <img key={userId} className="rounded-[2rem] object-cover max-w-[16rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />{/* blog.image */}
                        </Link>
                        <div class="p-5">
                        <Link to={`/product/${data.id}`} > 
                                <p key={userId} class={`${isHovered ? '' : 'truncate'} text-start hover:text-gray-900 text-[#5C5C42] mb-2 text-sm font-medium tracking-tight dark:text-white`}>{item.title}{/*blog.blog_title*/}</p>
                            </Link>
                                <p key={userId} class="flex flex-row justify-between text-center hover:text-gray-900 text-[#5C5C42] dark:text-gray-400"><span className='justify-self-start'>{item.userId}</span><img src={ShopCart} className='w-4 h-4 justify-self-end'/>{/*blog.blog_description*/}</p>
                        </div> 
                    </div>  
                </div> 
            ))}
          {selectedItem && (
                  <div className='flex flex-row justify-center'>
                      <div class="mb-4 max-w-[16rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                          <Link to={`/product/${selectedItem.id}`}>
                              <img key={userId} className="rounded-[2rem] object-cover max-w-[16rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />{/* blog.image */}
                          </Link>
                          <div class="p-5">
                              <Link to={`/product/${selectedItem.id}`} > 
                                  <p key={userId} class={`${isHovered ? '' : 'truncate'} text-center hover:text-gray-900 text-[#5C5C42] mb-2 text-sm font-medium tracking-tight dark:text-white`}>{selectedItem.title}{/*blog.blog_title*/}</p>
                              </Link>
                                  <p key={userId} class="text-center hover:text-gray-900 text-[#5C5C42] dark:text-gray-400">{selectedItem.userId}{/*blog.blog_description*/}</p>
                          </div> 
                      </div>  
                  </div>
              )}
              {filteredData.map((filteredSearch, index) => (
                <>
                  <div className='flex flex-row justify-center'>
                  <div class="mb-4 max-w-[16rem] rounded-[3rem] dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/product/${filteredSearch.id}`}>
                          <img key={index} className="rounded-[2rem] object-cover max-w-[16rem] h-[25rem] hover:opacity-75" src={heroImgOne} alt="product-image" />{/* blog.image */}
                      </Link>
                      <div class="p-5">
                          <Link to={`/product/${filteredSearch.id}`} > 
                              <p key={index} class={`${isHovered ? '' : 'truncate'} text-center hover:text-gray-900 text-[#5C5C42] mb-2 text-sm font-medium tracking-tight dark:text-white`}>{filteredSearch.title}{/*blog.blog_title*/}</p>
                          </Link>
                              <p key={index} class="text-center hover:text-gray-900 text-[#5C5C42] dark:text-gray-400">{filteredSearch.userId}{/*blog.blog_description*/}</p>
                          </div> 
                      </div>  
                  </div>
                  </>
              
                ))}
        </div>
      
         {/* Pagination  */}
         <ul className="pagination" class='list-none flex justify-center pb-12 '>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
            i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1 ? (
                <li
                key={i}
                className={i + 1 === currentPage ? 'border rounded-full active bg-[#5C5C42] text-[#ffffff]' : ''}
                onClick={() => {
                    paginate(i + 1);
                }}
                class={`${
                    i + 1 === currentPage ? 'w-8 h-8 border rounded-full bg-[#5C5C42] text-[#ffffff] shadow text-center p-1 m-1' : 'w-8 h-8 border rounded-full bg-[#ffffff] hover:bg-[#5C5C42] hover:text-[#ffffff] shadow text-[#4C7581] text-center p-1 m-1'
                }`}
                >
                {i + 1}
                </li>
            ) : null
            ))}
          </ul>
      {/* ////////////////////////////////////////// */}
      <div className='flex flex-row justify-center gap-24 '>
        {/* Filter Category */}
        <div className='flex flex-col bg-bg-[#403F2B] w-[15rem]'>
          
        {/* <Dropdown label="Dropdown" inline>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}


        </div>
      {/* Pagination  */}
         {/* <ul className="pagination" class='list-none flex justify-center pb-24 '>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
            
            <li

              key={i}
              className={i + 1 === currentPage ? 'active bg-[#4C7581] text-[#ffffff]' : ''}
              onClick={() =>{ 
                paginate(i + 1);
              }}
              class={`${
                i + 1 === currentPage ? 'w-8 h-8 border rounded-full bg-[#4C7581] text-[#ffffff] shadow  text-center p-1 m-1' : 'w-8 h-8 border rounded-full bg-[#ffffff] hover:bg-[#4C7581] hover:text-[#ffffff] shadow text-[#4C7581] text-center p-1 m-1' }`}
            >
              {i + 1}
          </li>
        ))}
        </ul> */}
      

    </div>
    </div>
    </>
  )
};
