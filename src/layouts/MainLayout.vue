<template>
  <q-layout view="lHr LpR lFr">

    <q-header  elevated class="bg-dark text-white glossy  " height-hint="98">

      <q-toolbar id="toolvar" class="row justify-between   ">

        <q-toolbar-title class=" desktop-only   q-ml-md col-xs-10 col-md-4 screen--xl    ">
          <q-avatar>
            <q-icon class="" name="fa-solid fa-store" />
          </q-avatar>
          Banca Cambauba
        </q-toolbar-title>
        <q-toolbar-title class=" mobile-only text-center  q-ml-lg col-xs-10 col-md-4 screen--xl    ">
          <q-avatar>
            <q-icon class="" name="fa-solid fa-store" />
          </q-avatar>
          Banca Cambauba
        </q-toolbar-title>


        <q-tabs inline-label class="desktop-only col-xs-12" :class="{ 'col-md-5': !this.usuario, 'col-md-6': this.usuario }">
          <q-route-tab class="text-orange-5  " icon="fa-solid fa-user" :to="!this.usuario ? '/login':''" :label="!this.usuario ? 'ENTRAR' :   this.usuario.nome " />
          <q-route-tab class="text-orange-5 " icon="fa-solid fa-bag-shopping" to="/sacola" label="SACOLA" />
          <q-route-tab class="text-orange-5  " icon="fa-solid fa-solid fa-heart" to="/page1" label="FAVORITOS" />
          <q-route-tab @click="ByeUsuario()" v-show="this.usuario" class="text-orange-5  " icon="fa-solid fa-person-walking-arrow-right" to="/login" label="SAIR" />
  
        </q-tabs>
        
        <q-btn class="mobile-only fixed-top-left q-my-sm  q-ml-sm " dense flat round icon="menu"
          @click="this.toggleLeftDrawer()" />

      </q-toolbar>
    

      <q-tabs inline-label class="bg-orange-5 glossy desktop-only" align="left">
        <q-route-tab to="/todas-categorias" label="Todas as categorias" />
        <q-route-tab to="/revistas" label="Revistas" />
        <q-route-tab to="/mangas" label="Mangás" />
        <q-route-tab to="/hqs" label="HQS" />
      </q-tabs>



    </q-header>

    <q-drawer class="bg-grey-10 " :show-if-above="leftDrawerOpen" v-model="leftDrawerOpen" side="right" rounded-borders>

      <q-list bordered class=" q-pa-none    ">

        <template v-for="(menuItemPersonal, index) in menuListPersonal" :key="index" >
          <q-item v-if="menuItemPersonal.ativo" clickable v-ripple class="glossy text-white " :to="menuItemPersonal.rota">
            <q-item-section avatar >
              <q-icon :color="menuItemPersonal.iconColor" :name="menuItemPersonal.icon" />
            </q-item-section>
            <q-item-section @click="ByeUsuario()">
              {{ menuItemPersonal.label === 'ENTRAR' && this.usuario ? this.usuario.nome.toUpperCase() : menuItemPersonal.label}}
            </q-item-section>
          </q-item>
          <q-separator dark teal :color="this.cor" size="2px" class="" :key="index"
            v-if="menuItemPersonal.separator" />
        </template>
        <template v-for="(menuItemSite, index) in menuListSite" :key="index">
          <q-item clickable v-ripple class="glossy text-white bg-orange-5 text-uppercase " :to="menuItemSite.rota">
            <q-item-section avatar>
              <q-icon :color="menuItemSite.iconColor" :name="menuItemSite.icon" />
            </q-item-section>
            <q-item-section class="">
              {{ menuItemSite.label }}
            </q-item-section>
          </q-item>
          <q-separator dark teal :color="this.cor" size="2px" class="" :key="'sep' + index"
            v-if="menuItemSite.separator" />
        </template>

      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

     <q-footer elevated class=" glossy bg-dark text-white">
            <q-toolbar>
                <q-toolbar-title class="desktop-only text-center text-subtitle1 ">
                    Rua Cambaúba, 1051 - Jardim Guanabara, Rio de Janeiro - RJ, 21940-005 
                </q-toolbar-title>
                <q-toolbar-title class="mobile-only text-center text-caption ">
                    Rua Cambaúba, 1051 - Jardim Guanabara, Rio de Janeiro - RJ, 21940-005 
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

  </q-layout>
</template>

<script>


import { ref } from 'vue'


const colors = ['primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning','light']




export default {
   props: [],

  created() {
    this.getUsuario()
    
  },
  data() {
    return {
      cor: '',
      leftDrawerOpen: ref(false),
      colorsLoop: null,
      usuario: null,
      menuListPersonal : [
  {
    icon: 'fa-solid fa-user',
    label: 'ENTRAR',
    iconColor: 'orange-5',
    separator: false,
    rota: '/login',
    ativo: true
 
  },
  {
    icon: 'fa-solid fa-solid fa-heart',
    label: 'FAVORITOS',
    iconColor: 'orange-5',
    separator: false,
    rota: '/favoritos',
    ativo: true
  },
  {
    icon: 'fa-solid fa-bag-shopping',
    label: 'SACOLA',
    iconColor: 'orange-5',
    separator: true,
    rota: '/sacola',
    ativo: true
  },
  {
    icon: 'fa-solid fa-person-walking-arrow-right',
    label: 'SAIR',
    iconColor: 'orange-5',
    separator: true,
    rota: '/login',
    ativo: false
  }

],
 menuListSite : [
  {
    icon: 'category',
    label: 'Todas as categorias',
    iconColor: 'white',
    textColor: 'white',
    separator: false,
    rota: '/todas-categorias'
  },
  {
    icon: 'fas fa-book-open',
    label: 'Revistas',
    separator: false
  },
  {
    icon: 'fa-regular fa-square',
    label: 'Mangás',
    separator: false
  },
  {
    icon: 'fa-regular fa-square',
    label: 'HQS',
    separator: false
  }
 
]
     
    }
  },
  watch: {
    '$route'(to, from) {
        this.getUsuario()
      
     
  },
    leftDrawerOpen(newValue, oldValue) {

      if (newValue) {
        this.colorsLoop
      } else {

        clearInterval(this.colorsLoop)
      }

    }
  },
  methods: {
    getUsuario() { 
      let cliente = JSON.parse(localStorage.getItem("usuario")) 
      cliente ? this.menuListPersonal[3].ativo = true : this.menuListPersonal[3].ativo = false
      this.usuario = cliente ? cliente : null
      return this.usuario?.nome
    },
    ByeUsuario() { 
      localStorage.clear();
      this.getUsuario()
     
    },
    loopColors() {
      this.colorsLoop = setInterval(() => {
        this.cor = colors[Math.floor((Math.random() * colors.length))]

     
      }, 500)


    },
    toggleLeftDrawer() {

      this.leftDrawerOpen = !this.leftDrawerOpen
      this.loopColors()

    }
  
  }

}
</script>
<style scoped>
.q-toolbar {

  flex-wrap: wrap !important;
}
</style>