<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Profile</span>
        </v-card-title>
        <v-card-text>
            <v-text-field type="text" label="Name" v-model="info.name" required></v-text-field>
            <v-text-field type="email" label="Email" v-model="info.email" required></v-text-field>
            <v-select v-model="info.language" :items="['EN','AR','FR']" required>
            </v-select>
        </v-card-text> 
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('hide-edit')">Close</v-btn>
          <v-btn color="green darken-1" text @click="editProfile">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name:'EditProfile',
    props:['user','dialog'],
    data(){
        return{
            info:this.user
        }
    },
    methods:{
        editProfile(){
            this.$emit('update-profile',this.info);
        }
    }
}
</script>