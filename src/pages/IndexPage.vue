<template>
  <q-page class="flex flex-center">
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['Vamo terminar logo esse site?']"
        sent
         bg-color="amber-7"
      />
    </div>
  </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  created() {
  
  },
  
})
</script>
