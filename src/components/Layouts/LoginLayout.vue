<template>
  <div
    class="c-l-login -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2"
  >
    <div class="login">
      <div class="login-logo mb-16 flex justify-center">
        <ProjectLogo></ProjectLogo>
      </div>
      <div class="login-card flex flex-col">
        <div class="login-card__title font-bold text-2xl mb-12">Kirish</div>
        <div class="login-card__body flex flex-col">
          <label class="text-xs mb-2 font-medium" for="login">LOGIN</label>
          <input
            v-model="login"
            class="px-4 py-3 mb-6"
            type="text"
            id="login"
          />
          <label class="text-xs mb-2 font-medium" for="password">PAROl</label>
          <input
            v-model="password"
            class="px-4 py-3 mb-6"
            type="password"
            id="password"
          />
        </div>
        <div class="login-card__footer">
          <VueRecaptcha
            :sitekey="siteKey"
            :load-recaptcha-script="true"
            @verify="handleSuccess"
            @error="handleError"
          ></VueRecaptcha>
          <button
            class="w-full py-3 rounded-lg text-white mt-3"
            @click="submit"
          >
            Kirish
          </button>
          <p v-if="!reCaptcha" class="text-center text-red-500 mt-3">
            {{ errorText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { computed } from "vue";
import ProjectLogo from "../Custom/ProjectLogo.vue";
import { useRouter, useRoute } from "vue-router";
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";

@Options({
  components: {
    ProjectLogo,
    VueRecaptcha,
  },
})
export default class LoginLayout extends Vue {
  router = useRouter();
  route = useRoute();
  login = "";
  password = "";
  reCaptcha = false;
  errorText = "";
  data = undefined;

  async submit() {
    if (this.login && this.password) {
      if (this.reCaptcha) {
        this.reCaptcha = true;
        await axios
          .post(`https://metsenatclub.xn--h28h.uz/api/v1/auth/login/`, {
            username: this.login,
            password: this.password,
          })
          .then((response: any) => {
            this.data = response;
          })
          .catch((error) => {
            this.reCaptcha = false;
            this.errorText = "Incorrect login or password !!!";
            console.error("There was an error!", error);
          });

        if (this.data) {
          this.router.push("/main");
        }
      } else {
        this.errorText = "Please do reCaptcha !!!";
      }
    } else {
      this.errorText = "Please fill the inputs !!!";
      this.reCaptcha = false;
    }
  }

  siteKey = computed(() => {
    return "6LdHwTciAAAAAHwt5D-bmiIunWrQ_isJnjav9N_3";
  });

  handleError = () => {
    console.log("hi its error");
  };

  handleSuccess = () => {
    this.reCaptcha = true;
  };
}
</script>

<style lang="scss" scoped>
.c-l-login {
  .login-card {
    background: #ffffff;
    border: 1px solid #ebeefc;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    padding: 2rem;

    &__title {
      color: #28293d;
    }

    &__body {
      label {
        letter-spacing: 1.15px;
      }

      input {
        width: 315px;
        background: rgba(224, 231, 255, 0.2);
        border: 1px solid #e0e7ff;
        border-radius: 6px;
      }
    }

    &__footer {
      button {
        background: #2e5bff;
      }
    }
  }
}
</style>
