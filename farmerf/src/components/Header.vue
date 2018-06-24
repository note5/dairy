<template>

  <v-toolbar color="green" app absolute clipped-left>
  <span v-if="$store.state.isLoggedIn">

  <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
</span>
   <v-toolbar-title class="mr-4">
     <span @click="navigateTo({'name':'/'})">
       Smart Farmer
     </span>
     
   </v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items >
      <v-btn v-if="!$store.state.isLoggedIn" flat @click="navigateTo({'name':'register'})">Register</v-btn>
      <v-btn v-if="!$store.state.isLoggedIn" flat @click="navigateTo({'name':'login'})">Login</v-btn>
      <v-btn v-if="$store.state.isLoggedIn" flat @click="navigateTo({'name':'dashboard'})">Dashboard</v-btn>
      <v-btn v-if="$store.state.isLoggedIn" flat @click="logout">Logout</v-btn>

    </v-toolbar-items>

 </v-toolbar>
</template>

<script>
export default {
 methods:{
   navigateTo({"name":route}){
     this.$router.push(route)
   },
   logout (){
     this.$store.dispatch('setToken',null)
     this.$store.dispatch('setUser',null)
     this.$router.push({
       name:'HelloWorld'
     })
   }
 }
 }
</script>

<style scoped>

.toolbar__title {
  color: white;
}
.toolbar__items{
  color:white;
}
</style>
