<script setup>
import { ref } from 'vue';
import AuthPage from "./pages/AuthPage/index.vue";
import ChatsPage from "./pages/ChatPage/index.vue";

const user = ref(undefined);

const handleAuth = (newUser) => {
  user.value = newUser;
};
</script>

<template>
  <AuthPage  @onAuth="handleAuth" />
  <ChatsPage  />
</template>
