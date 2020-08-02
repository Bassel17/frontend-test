const BaseUrl = process.env.VUE_APP_URL;

class PostsRepo{

    async getPostsOfUser(){
        try{
            const response = await fetch(`${BaseUrl}/posts/${localStorage.user_id}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200) return result.posts;
            return false;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    async deletePost(postId){
        try{
            const response = await fetch(`${BaseUrl}/post/${postId}`,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200) return result.post;
            return false;
        }catch(error){
            console.log(error);
            return false;
        }
    }

}

export default PostsRepo;