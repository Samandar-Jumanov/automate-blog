import { prisma } from "@/app/prisma";

export const GET = async () =>{
    try {
        const allPosts = await prisma.post.findMany({
            where : {published : true },
            include : {
                  author : {
                    select : { name : true }
                  }
            }
        });
        return  new Response(JSON.stringify(allPosts) , { status : 200})
      } catch (error) {
          return new Response(JSON.stringify(error) , { status : 500}) 
      }
};



