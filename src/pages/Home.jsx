import React, { useEffect, useState } from 'react'
import Product from "../Components/Product"
import Spinner from '../Components/Spinner';

export default function Home() {
    const API_URL="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    async function fetchProductData(){
      setLoading(true);
      try{
        const res=await fetch(API_URL);
        const data=await res.json();
        setPosts(data);

      }catch(e){
        console.log("Api fetch karne me moye moye ho gyaa");
        setPosts([]);
      }
      setLoading(false);

    }
    useEffect(()=>{
      fetchProductData();
    },[])
  return (
    <div>
        {
          loading? (<Spinner/>):(posts?(<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]'>{posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))}</div>):(<div className='flex justify-center items-center'>No Post Found</div>))
        } 
    </div>
  )
}
