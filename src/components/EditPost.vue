<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
            <v-text-field label="Title" v-model="title" required></v-text-field>
            <v-textarea label="Description" v-model="description" required></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('hide-edit')">Close</v-btn>
          <v-btn color="green darken-1" text @click="editPost">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import PostsRepo from '@/Repositories/PostsRepo';
const postsRepo = new PostsRepo();

export default {
    name:"EditPost",
    props:['post','dialog'],
    data(){
        return{
            title:this.post.title,
            description:this.post.description
        }
    },
    methods:{
        async editPost(){
            const result = await postsRepo.editPost(this.post.id,{
                title:this.title,
                description:this.description
            });
            if(result){
                const post = {
                    id:this.post.id,
                    title:this.title,
                    description:this.description
                }
                this.$emit('hide-edit');
                this.$emit('edit-post',post);
            }
        }
    }
}
</script>