<template>
  <q-layout view="lHr LpR lFr">

    <q-header elevated class="bg-dark text-white glossy  " height-hint="98">

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


        <q-tabs inline-label class="desktop-only col-md-5 col-xs-12 ">
          <q-route-tab class="text-orange-5  " icon="fa-solid fa-user" to="/login" label="ENTRAR" />
          <q-route-tab class="text-orange-5 " icon="fa-solid fa-bag-shopping" to="/page3" label="SACOLA" />
          <q-route-tab class="text-orange-5  " icon="fa-solid fa-solid fa-heart" to="/page1" label="FAVORITOS" />
        </q-tabs>

        <q-btn class="mobile-only fixed-top-left q-my-sm  q-ml-sm " dense flat round icon="menu"
          @click="this.toggleLeftDrawer()" />




      </q-toolbar>


      <q-tabs inline-label class="bg-orange-5 glossy desktop-only" align="left">
        <q-route-tab to="/page1" label="Todas as categorias" />
        <q-route-tab to="/page2" label="Revistas" />
        <q-route-tab to="/page3" label="Mangás" />
        <q-route-tab to="/page3" label="HQS" />
      </q-tabs>



    </q-header>

    <q-drawer class="bg-grey-10 " :show-if-above="leftDrawerOpen" v-model="leftDrawerOpen" side="right" rounded-borders>

      <q-list bordered class=" q-pa-none    ">

        <template v-for="(menuItemPersonal, index) in menuListPersonal" :key="index">
          <q-item clickable v-ripple class="glossy text-white " :to="menuItemPersonal.rota">
            <q-item-section avatar>
              <q-icon :color="menuItemPersonal.iconColor" :name="menuItemPersonal.icon" />
            </q-item-section>
            <q-item-section  class="">
              {{ menuItemPersonal.label }}
            </q-item-section>
          </q-item>
          <q-separator dark teal :color="this.cor" size="2px" class="" :key="'sep' + index"
            v-if="menuItemPersonal.separator" />
        </template>

        <template v-for="(menuItemSite, index) in menuListSite" :key="index">
          <q-item clickable v-ripple class="glossy text-white bg-orange-5 text-uppercase ">
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

  </q-layout>
</template>

<script>


import { ref } from 'vue'
import { RouterView } from 'vue-router'


const colors = ['primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning']

const menuListPersonal = [
  {
    icon: 'fa-solid fa-user',
    label: 'ENTRAR',
    iconColor: 'orange-5',
    separator: false,
    rota: '/login'

     
    
  },
  {
    icon: 'fa-solid fa-solid fa-heart',
    label: 'FAVORITOS',
    iconColor: 'orange-5',
    separator: false
  },
  {
    icon: 'fa-solid fa-bag-shopping',
    label: 'SACOLA',
    iconColor: 'orange-5',
    separator: true
  }

]
const menuListSite = [
  {
    icon: 'category',
    label: 'Todas as categorias',
    iconColor: 'white',
    textColor: 'white',
    separator: false
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

export default {

  created() {

  },
  data() {
    return {
      cor: '',
      leftDrawerOpen: ref(false),
      colorsLoop: null,
      rotaLogin: () => {this.$router.push("/login")} 
    }
  },
  setup() {

    return {

      menuListPersonal,
      menuListSite

    }

  },
  watch: {

    leftDrawerOpen(newValue, oldValue) {

      if (newValue) {
        this.colorsLoop
      } else {

        clearInterval(this.colorsLoop)
      }

    }
  },
  methods: {
    loopColors() {
      this.colorsLoop = setInterval(() => {
        this.cor = colors[Math.floor((Math.random() * colors.length))]

        console.log(this.cor)
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