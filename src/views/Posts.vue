<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <Post v-for="post in posts" v-bind:post="post" v-bind:key="post.id"/>
    </v-layout>
  </v-container>
</template>

<script>
import Post from '../components/Post';

export default {
  name:"Posts",
  props:["posts"],
  components:{
    Post
  }
}
</script>
