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
                    <v-btn color="green">Edit</v-btn>
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
    </v-card>
</template>

<script>
import ConfirmDelete from './ConfirmDelete'

export default {
    name:"Post",
    props:['post'],
    data(){
        return{
            isConfirmDeleteVisible:false
        }
    },
    components:{
        ConfirmDelete
    },
    methods:{
        toggleConfirmDelete(bool){
            this.isConfirmDeleteVisible = bool;
        }
    }
}
</script>

<style scoped>
.post{
    margin: 1em 0.5em;
}
</style>