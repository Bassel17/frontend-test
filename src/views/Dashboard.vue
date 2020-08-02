<template>
    <v-app>
        <v-row>
            <v-col>
                <SideBar v-on:change-view="changeView"/>
            </v-col>
            <v-col cols=8>
                <Posts v-if="isPosts"/>
                <Profile v-else/>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar';
import Posts from './Posts';
import Profile from './Profile';

export default {
  name:"Dashboard",
  components:{
    SideBar,
    Posts,
    Profile
  },
  data(){
      return{
          isPosts:true
      }
  },
  methods:{
      changeView(isPosts){
          this.isPosts=isPosts;
      }
  }
}
</script>