<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Post</span>
        </v-card-title>
        <v-card-text>
            <v-text-field label="Title" v-model="title" required></v-text-field>
            <v-textarea label="Description" v-model="description" required></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('hide-add')">Close</v-btn>
          <v-btn color="green darken-1" text @click="addPost">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import PostsRepo from '@/Repositories/PostsRepo';
const postsRepo = new PostsRepo();

export default {
    name:"AddPost",
    props:['dialog'],
    data(){
        return{
            title:"",
            description:""
        }
    },
    methods:{
        async addPost(){
            const result = await postsRepo.addPost({
                title:this.title,
                description:this.description
            });
            if(result){
                const post = {
                    title:this.title,
                    description:this.description
                }
                this.$emit('hide-add');
                this.$emit('add-post',post);
            }
        }
    }
}
</script>