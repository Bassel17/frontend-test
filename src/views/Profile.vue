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
                                <v-btn color="green" style="margin:1em;">edit</v-btn>
                                <v-btn color="red" style="margin:1em;">terminate</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import ProfileRepo from '../Repositories/ProfileRepo';
const profileRepo = new ProfileRepo();
import {returnLanguageName} from '../helpers/helpers';

export default {
  name:"Profile",
  data(){
      return{
        user:{
            name:"",
            email:"",
            language:""
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
