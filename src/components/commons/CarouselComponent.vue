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
                <CardProduto :nome="'The Killer Inside'" :link="'/src/assets/img/produto/revista/The_killer_inside.jpeg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                 <CardProduto :nome="'Turma da Mônica e Garfield'" :link="'/src/assets/img/produto/revista/Turma_da_monica_&_garfield.jpeg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                <CardProduto :nome="'Turma da Mônica Jovem'" :link="'/src/assets/img/produto/revista/Turma_da_monica_jovem.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                <CardProduto :nome="'Almanação Turma da Mônica'" :link="'/src/assets/img/produto/revista/AlmanacaoTurmaMonica.jpeg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                
              
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap 	 ">
                <div class="row fit justify-start items-center q-gutter-xs  q-col-gutter no-wrap">
                  <CardProduto :nome="'Hunter x Hunter'" :link="'/src/assets/img/produto/manga/Hunter_x_hunter.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'Samurai X'" :link="'/src/assets/img/produto/manga/Samurai_x.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'Fullmetal Alchemist'" :link="'/src/assets/img/produto/manga/Fullmetal_alchemist.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'HariMiya'" :link="'/src/assets/img/produto/manga/Horimiya.jpeg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                
              
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap 	 ">
                <div class="row fit justify-start items-center q-gutter-xs  q-col-gutter no-wrap">
                  <CardProduto :nome="'Homem de Ferro'" :link="'/src/assets/img/produto/hqs/Homem_de_ferro.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'Thor'" :link="'/src/assets/img/produto/hqs/thor.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'O incrivel Hulk'" :link="'/src/assets/img/produto/hqs/O_incrivel_Hulk.jpg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                  <CardProduto :nome="'Batman Knights Cidade Dourada'" :link="'/src/assets/img/produto/hqs/Batman_gothan_knights_cidade_dourada.jpeg'" class="  col-xs-12 col-sm-3 col-md-3 "  />
                
              
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
