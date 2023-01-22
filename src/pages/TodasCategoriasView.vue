<template>
        <div class="bg-orange-5 glossy  ">
          <div>
            <CarouselComponent  :classe = "'bg-grey-10 shadow-2 '"/>
          </div>
          <div>
            <CarouselComponent :classe = "'bg-orange-5 shadow-2 '" />
          </div>
          <div>
            <CarouselComponent :classe = "'bg-grey-10 shadow-2 '" />
          </div>
          

        </div>
  
</template>

<script>

import { Produto } from 'src/model/Produto';
import CarouselComponent from '../components/commons/CarouselComponent.vue';
import produtoService from '../service/produtoService.js'

export default {

 components: { CarouselComponent },
  setup () {
    return {
      produto: new Produto()
    }
  },
  methods: {
    getAll() { 
      userService.list()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error); 
      })
    }
  },
}
</script>