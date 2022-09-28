<template>
  <div class="v-a-auth">
    <LoginLayout></LoginLayout>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginLayout from "@/components/Layouts/LoginLayout.vue";
//   import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    LoginLayout,
  },
})
export default class AuthView extends Vue {}
</script>

<style lang="scss" scoped>
.v-a-auth {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #E5E5E5;
}
</style>