
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
            if(result.status !== 401){
                localStorage.token = result.access_token;
                localStorage.user_id = result.user_id ;
                return true;
            }
            return false
        }catch(error){
            console.log("Error ======> ",error);
            return false;
        }
    }

    async signup(userInfo){
        userInfo.language_id = returnLanguageId(userInfo.language);
        try{
            const response = await fetch(`${BaseUrl}/register`,{
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            if(result.user_id){
                localStorage.token = result.access_token;
                localStorage.user_id = result.user_id ;
                return true;
            }
            return false;
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

    async logout(){
        try{
            const response = await fetch(`${BaseUrl}/logout`,{
                method: 'POST',
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

export default AuthRepo;