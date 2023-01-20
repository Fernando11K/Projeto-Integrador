<template>
     <q-page class=" bg-primary  window-width row justify-center items-center  ">
    <div class=" q-ma-sm  shadow-24 login glossy bg-amber-7   ">
        <q-card style="max-width: 350px;" class=" bg-orange-5 fit glossy  ">
            <div class="text-center q-pt-sm  animate__heartBeat ">
                <q-icon size="70px" class="" name="fa-solid fa-user" />
                <div class=" text-bold text-h5 text-dark q-pt-sm ">Banca Cambauba</div>
            </div>
            <q-card-section class="row justify-center   ">
                <InputUsuarioLogin class="full-width " />
                <InputSenhaLogin class="full-width" />
                <q-btn class="q-mt-md glossy animate__heartBeat" color="dark" label="ENTRAR" />
            </q-card-section>
        </q-card>
     
    </div>
  </q-page>

</template>

<script>

import InputUsuarioLogin from '/src/components/login/InputUsuarioLogin.vue';
import InputSenhaLogin from '/src/components/login/InputSenhaLogin.vue';
import 'animate.css';

export default {
    components: { InputUsuarioLogin, InputSenhaLogin },
    data() {
        return {



        }
    }
}
</script>

<style scoped>
.login {
    border: 2px solid #FFB74D;
    padding: 10px;
    border-radius: 25px;
}

</style>

