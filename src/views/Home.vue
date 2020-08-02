<template>
  <v-app dark>
    <v-main>
      <v-container fill-height>
        <v-layout align-center justify-center >
          <v-flex class='login-form text-xs-center' >
          <v-card light>
            <v-card-text>
                  <v-subheader class ="login-header" v-if='options.isLoggingIn'> Login to your account </v-subheader>
                  <v-subheader class ="login-header" v-else> Create a new account </v-subheader>
                  <v-form>
                    <v-text-field 
                      v-if='!options.isLoggingIn'
                      v-model='user.name' 
                      label='Name'
                    />
                    <v-text-field 
                      v-model='user.email' 
                      label='Email'
                      type='email'
                    />
                    <v-text-field 
                      v-model='user.password' 
                      label='Password'
                      type='password'
                    />
                    <v-select v-if="!options.isLoggingIn" v-model="user.language" :items="['EN','AR','FR']">
                    </v-select>
                    <v-btn
                      v-if='options.isLoggingIn' 
                      @click.prevent='signIn' 
                      block 
                      type='submit'
                    >sign in</v-btn>
                    <v-btn v-else block 
                      type='submit' 
                      @click.prevent='signUp'
                    > Sign up </v-btn>
                  </v-form>
            </v-card-text>
            <v-card-text v-if='options.isLoggingIn'>
              Don't have an account?
              <v-btn
                light 
                @click='options.isLoggingIn = false'
              >Sign up</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthRepo from '@/Repositories/AuthRepo';
const authRepo = new AuthRepo();

export default {
  name: 'Home',
  data(){
    return{
      options:{
        isLoggingIn:true
      },
      user:{
        name:'',
        email:'',
        password:'',
        language:'EN'
      }
    }
  },
  methods:{
    async signIn(){
      const result = await authRepo.login(this.user);
      console.log(result);
      this.user = {
        name:'',
        email:'',
        password:'',
        language:'EN'
      }
    },
    async signUp(){
      const result = await authRepo.signup(this.user);
      console.log(result);
      this.user = {
        name:'',
        email:'',
        password:'',
        language:'EN'
      }
    }
  }
}
</script>

<style scoped>
  .login-form{
    max-width: 500px;
  }

  .login-header{
    font-size: 20px;
  }
</style>
