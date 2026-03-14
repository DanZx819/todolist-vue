<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <View>
      <slot></slot>
    </View>
  </v-app>
</template>

<script setup>
import View from "./view.vue";
import Alert from "@/components/shared/Alert.vue";
import {useAlertStore} from "@/stores/alert.js";

const alertStore = useAlertStore();
</script>
