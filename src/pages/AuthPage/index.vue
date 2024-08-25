<template>
  <div class="text-white flex justify-center items-center rounded-3xl bg-[#282b36] min-h-screen flex-col">

    <div class="flex justify-between py-8 items-center flex-col text-5xl jersey-10-regular">
      <h1>Chat App</h1>
    </div>

    <div class="py-5 select-none">
      <div class="flex justify-center items-center flex-col md:flex-row px-6 md:space-x-16 w-full">
        <!-- Login Form -->
        <div class="w-full flex flex-col justify-between items-center max-w-md py-10 px-[36px] bg-[#363741] rounded-2xl shadow-md">
          <form @submit.prevent="login">
            <h2 class="text-2xl font-semibold text-center mb-4">Login</h2>
            <input
              placeholder="Username"
              type="text"
              v-model="loginForm.username"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <input
              placeholder="Password"
              type="password"
              v-model="loginForm.password"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <button
              type="submit"
              class="w-full px-4 py-2 font-semibold text-[#363741] border border-[#363741] bg-[#1890ff] rounded-md hover:text-[#1890ff] transition-all hover:bg-[#363741] hover:border-[#1890ff] focus:outline-none"
            >
              Login
            </button>
            <div class="pt-10 flex flex-col justify-center items-center">
              <h1>Don't have an account?</h1>
              <h1>Then Sign up</h1>
            </div>
          </form>
        </div>

        <!-- Separator -->
        <div>
          <h1 class="text-2xl py-10 focus:outline-none font-semibold">OR</h1>
        </div>

        <!-- Sign Up Form -->
        <div class="w-full max-w-md py-10 px-[36px] bg-[#363741] rounded-2xl shadow-md">
          <form @submit.prevent="signup">
            <h2 class="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <input
              placeholder="Username"
              type="text"
              v-model="signupForm.username"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <input
              placeholder="Password"
              type="password"
              v-model="signupForm.password"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <input
              placeholder="Email"
              type="text"
              v-model="signupForm.email"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <input
              placeholder="First name"
              type="text"
              v-model="signupForm.first_name"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <input
              placeholder="Last name"
              type="text"
              v-model="signupForm.last_name"
              class="w-full px-4 py-2 mb-4 bg-[#282b36] rounded-md"
            />
            <button
              type="submit"
              class="w-full px-4 py-2 font-semibold text-[#363741] border border-[#363741] bg-[#1890ff] rounded-md hover:text-[#1890ff] transition-all hover:bg-[#363741] hover:border-[#1890ff] focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { loginRest, signupRest } from "./api";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      signupForm: {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
      },
    };
  },
  methods: {
    login() {
      loginRest(this.loginForm.username, this.loginForm.password)
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.loginForm.password })
        )
        .catch((error) => {
          console.error("Login error", error.response?.data || error.message);
        });
    },
    signup() {
      signupRest(
        this.signupForm.username,
        this.signupForm.password,
        this.signupForm.email,
        this.signupForm.first_name,
        this.signupForm.last_name
      )
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.signupForm.password })
        )
        .catch((error) => {
          console.error("Sign up error", error.response?.data || error.message);
        });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Matemasie&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.jersey-10-regular {
  font-family: "Jersey 10", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
