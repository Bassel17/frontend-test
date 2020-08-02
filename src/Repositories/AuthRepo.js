
import {returnLanguageId} from '@/helpers/helpers.js';

class AuthRepo{

    async login(credentials){
        try{
            const response = await fetch(`http://127.0.0.1:8000/api/login`,{
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
            const response = await fetch(`http://127.0.0.1:8000/api/register`,{
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

}

export default AuthRepo;