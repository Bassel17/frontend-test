<template>
    <v-app>
        <v-row>
            <v-col>
                <SideBar v-on:change-view="changeView"/>
            </v-col>
            <v-col cols=11>
                <Posts v-if="isPosts" v-bind:posts="posts"/>
                <Profile v-else/>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import router from '../router';
import SideBar from '../components/SideBar';
import Posts from './Posts';
import Profile from './Profile';
import PostsRepo from '@/Repositories/PostsRepo';
const postsRepo = new PostsRepo();

export default {
  name:"Dashboard",
  components:{
    SideBar,
    Posts,
    Profile
  },
  data(){
      return{
          isPosts:true,
          posts:[]
      }
  },
  methods:{
      changeView(isPosts){
          this.isPosts=isPosts;
      }
  },
  async created(){
      const result = await postsRepo.getPostsOfUser();
      if(result){
          this.posts = result;
      }else{
          router.push("/");
      }
  }
}
</script>