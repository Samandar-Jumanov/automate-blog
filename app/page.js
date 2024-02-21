"use client"
import PostCard from "@/components/Posts";
import { useState , useEffect } from "react";

const Home =  () => {
   const [posts , setPosts] = useState(null)

       useEffect(() =>{
           const fetchAllPosts = async () =>{
                 const response = await fetch("/api/fetchAllPosts")
                 const data = await  response.json()
                 setPosts(data)
           };

               fetchAllPosts()
       } , []);

if(!posts) {
        return ( <h1> Loading ....</h1>)
     }
       return ( 
         <div>  
              <PostCard data = {posts} />
         </div>
       )
  };
  
  export default Home;