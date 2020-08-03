<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <Post 
        v-for="post in posts" 
        v-bind:post="post" 
        v-bind:key="post.id" 
        v-on:delete-post="deletePost"
        v-on:edit-post ="editPost"
      />
    </v-layout>
    <v-btn color="blue" @click="toggleAddPost(true)">Add Post</v-btn>
    <AddPost
      v-bind:dialog="isAddPostShown"
      v-on:hide-add="toggleAddPost(false)"
      v-on:add-post="addPost"
    />
  </v-container>
</template>

<script>
import Post from '../components/Post';
import AddPost from '../components/AddPost';

export default {
  name:"Posts",
  props:["posts"],
  components:{
    Post,
    AddPost
  },
  data(){
    return{
      isAddPostShown:false
    }
  },
  methods:{
    deletePost(id){
      this.$emit('delete-post',id)
    },
    editPost(post){
      this.$emit('edit-post',post);
    },
    addPost(post){
      this.$emit('add-post',post);
    },
    toggleAddPost(bool){
      this.isAddPostShown=bool;
    }
  }
}
</script>
