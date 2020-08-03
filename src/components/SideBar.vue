<template>
      <v-navigation-drawer
        :right="false"
        :permanent="true"
        :expand-on-hover="true"
        :mini-variant="miniVariant"
        dark
        fixed
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-content>
              <v-list-item-title>FaceTooth</v-list-item-title>
              <v-list-item-subtitle>The App For Your Weird Posts</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="navigate(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import router from '../router';
import AuthRepo from '../Repositories/AuthRepo';
const authRepo = new AuthRepo();

export default {
  name:"SideBar",
  data(){
    return{
      items:[
        { title: 'My Posts', icon: 'mdi-view-dashboard' , isPosts:true},
        { title: 'My Profile', icon: 'mdi-image' ,isPosts:false},
        { title: 'logout', icon: 'mdi-exit-to-app', logout:true}
      ],
      miniVariant:true
    }
  },
  methods:{
      async navigate(item){
          if(item.logout){
              const result = await authRepo.logout();
              if(result){
                  router.push('/');
              }
          }else{
              this.$emit('change-view',item.isPosts);
          }
      }
  }
}
</script>
