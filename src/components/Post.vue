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
                    <v-btn color="red">Delete</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

export default {
    name:"Post",
    props:['post']
}
</script>

<style scoped>
.post{
    margin: 1em 0.5em;
}
</style>