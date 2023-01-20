<template>
        <div class="">
            <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            infinite
            padding
            control-color="primary"
            arrows
            height="440px"
            :class="classe"
            >
            <q-carousel-slide :name="1" class="column no-wrap 	 ">
                <div class="row fit justify-start items-center q-gutter-xs  q-col-gutter no-wrap">
                <CardProduto :nome="'HariMiya'" :link="'/src/assets/img/produto/manga/Horimiya.jpeg'" class="  col-xs-12 col-md-3 "  />
                 <CardProduto :nome="'Turma da mônica'" :link="'/src/assets/img/produto/revista/turma-monica-garfield.jpeg'" class="  col-xs-12 col-md-3 "  />
                <CardProduto :nome="'HariMiya'" :link="'/src/assets/img/produto/manga/Horimiya.jpeg'" class="  col-xs-12 col-md-3 "  />
                <CardProduto :nome="'Turma da mônica'" :link="'/src/assets/img/produto/revista/turma-monica-garfield.jpeg'" class="  col-xs-12 col-md-3 "  />
                
              
                </div>
            </q-carousel-slide>
         
            </q-carousel>
        </div>
</template>

<script>
import { ref } from 'vue'
import CardProduto  from './CardProduto.vue';

export default {
   props: ['classe'],
  components: { CardProduto },
   

  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
