<template>
   <v-layout column>
    <v-flex d-flex xs12 sm6 md4  >
     <div class="white elevation-2">
       <v-toolbar flat dense class="green" dark>
         <v-toolbar-title>Register</v-toolbar-title>
       </v-toolbar>
       <div class="pl-4 pr-4 pt-2 pb-2">
         <form name="reg" autocomplete="off">
          <v-text-field 
          type="email"
          name="email" 
          v-model="email"
          placeholder="email"></v-text-field>
          <br>
          <v-text-field 
          type="password" 
          name="password" 
          v-model="password"
          autocomplete="new-password"
          placeholder="password"></v-text-field>
         
          <v-btn  @click="register" color="green">register</v-btn>
          <br>
           <div v-if="snackbar==true">
           <v-snackbar
              :timeout="timeout"
              :top="y === 'top'"
              :bottom="y === 'bottom'"
              :right="x === 'right'"
              :left="x === 'left'"
              :multi-line="mode === 'multi-line'"
              :color="color"
              :vertical="mode === 'vertical'"
              v-model="snackbar">
              {{info}}
          </v-snackbar>
          </div>
         </form>
      </div>
     </div>
    </v-flex>
  </v-layout> 
</template> 

<script>

import Authservice from '@/services/authenticationService'
export default {
  
  data () {
    return{
       snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        color: 'red',
        timeout: 2000,

      email:'',
      password:'',
      info:''
    }
  },
  methods:{
    async register(){
      try{

         const response = await Authservice.register({
          email:  this.email,
          password:  this.password
      }) 
      this.info = response.data
      this.color ='green'
      this.snackbar = true

      }catch(error){

        this.info = error.response.data.error
        this.snackbar=true
        console.log(this.err)
      }
     
    }
  }
    
}
</script>
<style scoped>

</style>
