"use client"
import PostCard from "@/components/Posts";
import { useState , useEffect } from "react";

const Home =  () => {
   const [posts , setPosts] = useState([])

       useEffect(() =>{
           const fetchAllPosts = async () =>{
                 const response = await fetch("/api/fetchAllPosts")
                 const data = await  response.json()
                 setPosts(data)
           };

               fetchAllPosts()
       } , []);


       return ( 
         <div>  
              <PostCard data = {posts} />
         </div>
       )
  };
  
  export default Home;