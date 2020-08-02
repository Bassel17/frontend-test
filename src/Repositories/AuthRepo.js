
import {returnLanguageId} from '@/helpers/helpers.js';

const BaseUrl = process.env.VUE_APP_URL;
class AuthRepo{

    async login(credentials){

        try{
            const response = await fetch(`${BaseUrl}/login`,{
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            localStorage.token = result.access_token;
            localStorage.user_id = result.user_id ;
            return true;
        }catch(error){
            console.log("Error ======> ",error);
            return false;
        }
    }

    async signup(userInfo){
        userInfo.language_id = returnLanguageId(userInfo.language_id);
        try{
            const response = await fetch(`${BaseUrl}/register`,{
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            localStorage.token = result.access_token;
            localStorage.user_id = result.user_id ;
            return true;
        }catch(error){
            console.log("Error ======> ",error);
            return false;
        }
    }

    async checkUser(){
        if(localStorage.token){
            try{
                const response = await fetch(`${BaseUrl}/check`,{
                    method: 'GET',
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
        return false;
    }

}

export default AuthRepo;