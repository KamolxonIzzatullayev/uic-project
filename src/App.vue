<template>
  <nav v-if="$route.path !== '/auth'">
    <navbar-component></navbar-component>
  </nav>
  <header>
    
  </header>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/Custom/NavbarComponent.vue";

@Options({
  components: {
    NavbarComponent,
    
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display", sans-serif;
  box-sizing: border-box;
}
</style>
