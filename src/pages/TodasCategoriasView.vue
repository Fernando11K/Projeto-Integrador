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

import CarouselComponent from '../components/commons/CarouselComponent.vue';


export default {

 components: { CarouselComponent },
  setup () {
    return {
     
    }
  }
}
</script>