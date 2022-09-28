<template>
  <div class="c-c-navbar">
    <div class="container mx-auto py-3">
      <div class="flex flex-wrap justify-between items-center">
        <NavbarLogo></NavbarLogo>
        <div class="actions flex items-center">
          <div class="actions-profile flex items-center p-1 pl-5 cursor-pointer">
            <div class="actions-profile__name text-xs font-bold mr-6">
              Shohrux
            </div>
            <div class="actions-profile__logo flex">
              <AvatarLogo></AvatarLogo>
            </div>
          </div>
          <div class="actions-exit ml-10 cursor-pointer" @click="goBack">
            <ExitLogo></ExitLogo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarLogo from "./NavbarLogo.vue";
import AvatarLogo from "./AvatarLogo.vue";
import ExitLogo from "./ExitLogo.vue";
import { useRouter } from "vue-router";

@Options({
  components: {
    NavbarLogo,
    AvatarLogo,
    ExitLogo,
  },
})
export default class NavbarComponent extends Vue {
  router = useRouter();
  goBack() {
    this.router.push("/auth");
  }
}
</script>

<style lang="scss" scoped>
.c-c-navbar {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  .actions {
    &-profile {
      background: #f1f1f3;
      border-radius: 6px;
    }
  }
}
</style>
