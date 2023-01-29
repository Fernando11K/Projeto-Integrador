<template>
  <q-page
    class="window-height window-width row"
    style="background: #464646;"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card flat class="shadow-24" style="width:950px;height:590px;">
          <q-card-section class="bg-grey-10">
            <div><h4 class="text-h5 text-white q-my-md"> 
              <q-btn round color="orange" icon="shopping_cart" />  Sacola</h4>
            <div class="absolute-bottom-right q-pr-md" >             
            </div>
            </div>
          </q-card-section>
          
          <ul>
  <li>Lorem</li> 
  <li>Ipsum</li>
  <li>Abc</li>
</ul>  
           
        </q-card>
      </div>
    </div>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:300px;">
          <q-card-section class="bg-grey-10">
            <h4 class="text-h5 text-white q-my-md">Total de itens</h4>
            <div class="absolute-bottom q-pr-md" >
        
            </div>
          </q-card-section>
          
          <q-card-section>
            
        
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="orange" class="full-width text-white" label="Confirmar Pedido" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            
          </q-card-section>
        </q-card>
      </div>
    </div>
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