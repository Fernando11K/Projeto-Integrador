<template>
  <div class="fullscreen bg-blue  text-center q-pa-md flex flex-center">
    <div  >
      <div :class="this.color" style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" >
        <p :class="this.color">Oops. Ocorreu um erro ...</p>
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Página Inicial"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
const colors = ['text-primary', 'text-secondary', 'text-accent',
  'text-dark', 'text-positive', 'text-negative','text-info', 'text-warning']
export default {
  name: 'ErrorNotFound',

  created() {
    this.loopColors()
  },
  data() {
    return {
       color: '',
    }
  },
  methods: {
    loopColors() {
      this.colorsLoop = setInterval(() => {
        this.color = colors[Math.floor((Math.random() * colors.length))]

     
      }, 500)
    },
  }
}
</script>

<style scoped>

</style>
