<template>
    <v-card bright class="white--text post">
        <v-row>
            <v-col :cols=10>
                <v-card-title primary-title>
                    <div class="headline">{{post.title}}</div>
                </v-card-title>
                <v-card-text>
                    <p>{{post.description}}</p>
                </v-card-text>
            </v-col>
            <v-col>
                <v-card-actions>
                    <v-btn color="green" @click="toggleEdit(true)">Edit</v-btn>
                    <v-btn color="red" @click="toggleConfirmDelete(true)">Delete</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
        <ConfirmDelete 
            v-bind:dialog="isConfirmDeleteVisible" 
            v-bind:postId ="post.id"
            v-on:hide-delete ="toggleConfirmDelete(false)"
            v-on:delete-post ="$emit('delete-post',post.id)"
        />
        <EditPost
            v-bind:dialog="isEditVisible" 
            v-bind:post ="post"
            v-on:hide-edit ="toggleEdit(false)"
            v-on:edit-post ="editPost"
        />
    </v-card>
</template>

<script>
import ConfirmDelete from './ConfirmDelete';
import EditPost from './EditPost';

export default {
    name:"Post",
    props:['post'],
    data(){
        return{
            isConfirmDeleteVisible:false,
            isEditVisible:false
        }
    },
    components:{
        ConfirmDelete,
        EditPost
    },
    methods:{
        toggleConfirmDelete(bool){
            this.isConfirmDeleteVisible = bool;
        },
        toggleEdit(bool){
            this.isEditVisible = bool;
        },
        editPost(post){
            this.$emit('edit-post',post);
        }
    }
}
</script>

<style scoped>
.post{
    margin: 1em 0.5em;
}
</style>