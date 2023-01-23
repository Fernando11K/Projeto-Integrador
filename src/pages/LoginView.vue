<template>
     <q-page class=" bg-primary  window-width row justify-center items-center  ">
    <div class=" q-ma-sm  shadow-24 login glossy bg-amber-7   ">
        <q-card style="max-width: 350px;" class=" bg-orange-5 fit glossy  ">
            <div class="text-center q-pt-sm  animate__heartBeat ">
                <q-icon size="70px" class="" name="fa-solid fa-user" />
                <div class=" text-bold text-h5 text-dark q-pt-sm ">Banca Cambauba</div>
            </div>
            <q-card-section class="row justify-center  ">
                <InputUsuarioLogin v-model="this.usuario.email" class="full-width " />
                <InputSenhaLogin v-model="this.usuario.senha" class="full-width" />
                <q-btn :disable="desabilitaBotao()" :loading="loading" class="q-mt-md glossy animate__heartBeat" color="dark" label="ENTRAR" @click="entrar()" />
            </q-card-section>
        </q-card>
  

    </div>
    
  </q-page>
        <q-dialog v-model="alert">
            <q-card class=" bg-red-14  q-pa-sm ">
               

                <q-card-actions align="center" >
                <q-icon color="amber" name="fa-solid fa-triangle-exclamation text" size="3vw" />
                    <span class=" q-pl-lg  text-weight-medium text-amber">Email ou senha incorretos! </span>
                
                    <q-btn  class="" rounded flat label="OK" text-color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
            </q-dialog>
</template>

<script>

import InputUsuarioLogin from '/src/components/login/InputUsuarioLogin.vue';
import InputSenhaLogin from 'src/components/login/InputSenhaLogin.vue';
import 'animate.css';
import usuarioService from 'src/service/usuarioService';



export default {
    components: { InputUsuarioLogin, InputSenhaLogin },
    created() { 
     
    },
    data() {
        return {
            alert: false,
            usuario: { 
                email: '',
                senha: ''
            },
             loading: false


        }
    },
    methods: {
        entrar() { 
            this.loading = true
            usuarioService.login(this.usuario)
                .then(response => {
              
                    this.$router.push("/todas-categorias")
                       
                })
                .catch(err => {
                    console.error(err); 
                    this.alert = true;

                })
                .finally(() => {
                    this.loading = false
                });
            
        },
        desabilitaBotao() { 
            return (
                !this.usuario.email || !this.usuario.senha
            )
        }
        
    },
}
</script>

<style scoped>
.login {
    border: 2px solid #FFB74D;
    padding: 10px;
    border-radius: 25px;
}

</style>

