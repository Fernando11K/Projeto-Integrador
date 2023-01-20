<template>
  <div class="row  " >
    <q-card  class="my-card  " >
      <q-img  :src="link"  >
        <div class="absolute-top text-subtitle2 text-center   ">
         {{nome}}
        </div>
        <div class="absolute-bottom text-center invisible ">
            <div > <span class="text-weight-bold "> Quantidade:  </span> 3 </div>
            <div > <span class="text-weight-bold"> Segmento:  </span> Mangá </div>
            <span class="text-weight-bold"> Volume:  </span> 4 
        </div>
        
      </q-img>
      
       
    </q-card>
    
    

    
  </div>
</template>

<script>
export default {
  props: ['link','nome'],
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
