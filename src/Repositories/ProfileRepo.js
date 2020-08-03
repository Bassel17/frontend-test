const BaseUrl = process.env.VUE_APP_URL;
import {returnLanguageId} from '@/helpers/helpers.js';

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

    async updateUserProfile(data){
        data.language_id = returnLanguageId(data.language);
        try{
            const response = await fetch(`${BaseUrl}/profile/${localStorage.user_id}`,{
                method: 'PATCH',
                body:JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200) return true;
            return false;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    async deleteUserProfile(){
        try{
            const response = await fetch(`${BaseUrl}/profile/${localStorage.user_id}`,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200) {
                localStorage.clear();
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }
    }

}

export default ProfileRepo;