<template>
  <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-card-title>User Profile</v-card-title>
                    </v-flex>
                    <v-divider/>
                    <v-row justify="center">
                        <v-col>
                            <v-row>
                                <v-col cols=4><v-card-subtitle>Name:</v-card-subtitle></v-col>
                                <v-col><v-card-text>{{user.name}}</v-card-text></v-col>
                            </v-row>
                            <v-divider/>
                            <v-row>
                                <v-col cols=4><v-card-subtitle>Email:</v-card-subtitle></v-col>
                                <v-col><v-card-text>{{user.email}}</v-card-text></v-col>
                            </v-row>
                            <v-divider/>
                            <v-row>
                                <v-col cols=4><v-card-subtitle>Language:</v-card-subtitle></v-col>
                                <v-col><v-card-text>{{user.language}}</v-card-text></v-col>
                            </v-row>
                        </v-col>
                        <v-col align-self="end">
                            <v-card-actions>
                                <v-btn @click="toggleEditProfile(true)" color="green" style="margin:1em;">edit</v-btn>
                                <v-btn @click="terminateProfile" color="red" style="margin:1em;">terminate</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-layout>
        <EditProfile
            v-bind:user="user"
            v-bind:dialog="isEditProfileShown"
            v-on:hide-edit="toggleEditProfile(false)"
            v-on:update-profile="editProfile"
        />
    </v-container>
</template>

<script>
import ProfileRepo from '../Repositories/ProfileRepo';
const profileRepo = new ProfileRepo();
import {returnLanguageName} from '../helpers/helpers';
import  EditProfile from '../components/EditProfile';
import router from '../router';

export default {
  name:"Profile",
  components:{
      EditProfile
  },
  data(){
      return{
        user:null,
        isEditProfileShown:false
      }
  },
  methods:{
      toggleEditProfile(bool){
          this.isEditProfileShown=bool;
      },
      async editProfile(data){
          const result = await profileRepo.updateUserProfile(data);
          if(result){
              this.user=data;
              this.toggleEditProfile(false);
          }
      },
      async terminateProfile(){
          const result = await profileRepo.deleteUserProfile();
          if(result){
              router.push('/');
          }
      }
  },
  async created(){
      const result = await profileRepo.getUserProfile();
      if(result){
        this.user = {
            name:result.user.name,
            email:result.user.email,
            language: returnLanguageName(result.user.language_id)
        }
      }
  }
}
</script>
