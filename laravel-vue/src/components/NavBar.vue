<template>
  <header class="p-5 text-white bg-blue-400">
    <nav class="container flex items-center justify-between mx-auto">
      <div v-if="authUser" class="flex items-center space-x-5">
        <router-link to="/dashboard">
          <HomeIcon class="w-6 h-6 text-white" />
          <span class="sr-only">Dashboard</span>
        </router-link>
        <router-link to="/users" v-if="isAdmin">Users</router-link>
      </div>
      <router-link to="/" v-else>
        <HomeIcon class="w-6 h-6 text-white" />
      </router-link>
      <div class="inline-flex items-center space-x-5" v-if="authUser">
        <router-link to="/user">{{ authUser.name }}</router-link>
        <LogoutComponent />
      </div>
      <router-link
        v-else
        to="/login"
        class="inline-flex items-center space-x-2"
      >
        <span>Login</span>
        <LoginIcon class="w-6 h-6 text-white" />
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import LogoutComponent from "@/components/LogoutComponent";
import HomeIcon from "@/components/icons/HomeIcon";
import LoginIcon from "@/components/icons/LoginIcon";

export default {
  name: "NavBar",
  components: {
    LogoutComponent,
    HomeIcon,
    LoginIcon,
  },
  computed: {
    ...mapGetters("auth", ["authUser", "isAdmin"]),
  },
};
</script>
