const BaseUrl = process.env.VUE_APP_URL;

class ProfileRepo{

    async getUserProfile(){
        try{
            const response = await fetch(`${BaseUrl}/profile/${localStorage.user_id}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200) return result;
            return false;
        }catch(error){
            console.log(error);
            return false;
        }
    }

}

export default ProfileRepo;