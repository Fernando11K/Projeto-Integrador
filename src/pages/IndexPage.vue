<template>
  <q-page class="flex flex-center">
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message v-show="bemVindo" 
        name="Banca Cambauba"
        :text="['Olá, bem vindo!']"
         avatar="/src/assets/img/produto/hqs/Batman_gothan_knights_cidade_dourada.jpeg"
        stamp="agora mesmo"
         bg-color="amber"
    
      />
      <q-chat-message v-show="navegue "
       avatar="/src/assets/img/produto/hqs/Batman_gothan_knights_cidade_dourada.jpeg"
        name="Banca Cambauba"
        :text="['Navegue por nossa página!']"
         stamp="agora mesmo"
         bg-color="amber"
      
      />
       <q-chat-message v-show="loading"
       
        name="Banca Cambauba"
        avatar="/src/assets/img/produto/hqs/Batman_gothan_knights_cidade_dourada.jpeg"
        bg-color="amber"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
      
    
    </div>
  </div>
  </q-page>
</template>

<script>


import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  created() {
    setTimeout(() => {
      this.bemVindo = true
    }, 1000);
    setTimeout(() => {
      this.navegue = true
      this.loading = false
    }, 3000);
    
  },
  data() {
    return {
      bemVindo: false,
      navegue: false,
      loading: true
     
    }
  }
})
</script>
