"use client"


const PostCard = ( {data} ) =>{

     return ( 
         <div>  
             {data.map((each) =>{
                 <div key={each.id}>
                     <h2>{each.author.name}</h2>
                     <h2>{each.title}</h2>
                      <p>{each.content}</p>
                 </div>
             })}

         </div>
     )
    
}


export default PostCard;
