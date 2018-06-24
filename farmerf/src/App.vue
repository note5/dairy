<template>
  <div id="app">
  <pageheader/> <!--Use the imported componet in the template -->
    <v-app>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import pageheader from '@/components/Header.vue' //import the header.vue file
export default {
  name: 'App',
   components:{   //create the componets object and pass the file imported
    pageheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
