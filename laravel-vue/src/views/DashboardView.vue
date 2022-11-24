<template>
  <div class="p-5 xl:px-0">
    <div class="max-w-xl m-auto">
      <MessageForm class="mb-4" />
      <article class="p-5 bg-white rounded shadow">
        <MessagesComponent />
      </article>
    </div>
    <footer class="py-5 text-center">
      <p class="text-gray-400">
        
      </p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MessagesComponent from "@/components/MessagesComponent";
import MessageForm from "@/components/MessageForm";

export default {
  name: "DashboardView",
  components: {
    MessagesComponent,
    MessageForm,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
