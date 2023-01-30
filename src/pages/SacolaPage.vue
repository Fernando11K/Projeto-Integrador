<template>
  <q-page class="window-height window-width row bg-grey-8">
    <section class="row justify-between col-12">
        <q-card flat class="shadow-24 col-8  ">
          <q-card-section class="bg-grey-10">
            <div>
              <h4 class="text-h5 text-white q-my-md"> 
              <q-btn round color="orange" icon="shopping_cart" />  Sacola</h4>
            </div>
          </q-card-section>
          
            <ul>
              <li>Lorem</li> 
              <li>Ipsum</li>
              <li>Abc</li>
            </ul>      
        </q-card>
    
        <q-card square class="shadow-24 col-3 q-mr-xl  " style="min-width:300px;max-height:300px;">
          <q-card-section class="bg-grey-10 " >
            <h4 class="text-h5 text-white  text-center">Total de itens para reserva</h4>
          </q-card-section>
            <q-card-section>
             Resumo do pedido
      </q-card-section>
          
          <q-card-actions class="q-pt-sm ">
            <q-btn unelevated size="lg" color="orange" class="full-width text-white" label="Confirmar Rerserva" />
          </q-card-actions>
        </q-card>
     </section>
  </q-page>
</template>

<script>


export default {

 components: {  },
  setup () {
    return {
     
    }
  },
  methods: {
    
  },
}
</script>