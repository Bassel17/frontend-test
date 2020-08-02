<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Are you sure you want to delete this post ?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

        
          <v-btn
            color="white darken-1"
            text
            @click="$emit('hide-delete')"
          >
            Cancel
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="deletePost"
          >
            Confirm Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import PostsRepo from '@/Repositories/PostsRepo';
const postsRepo = new PostsRepo();

export default {
    name:"ConfirmDelete",
    props:['dialog','postId'],
    methods:{
        async deletePost(){
            const result = await postsRepo.deletePost(this.postId);
            if(result){
                this.$emit('hide-delete');
                this.$emit('delete-post',this.postId);
            }
        }
    }
}
</script>