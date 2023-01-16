<template>
    <div class="q-pa-md bg-orange-4 shadow-24  glossy">
        <div class="q-gutter-md  ">

            <q-input dense outlined bg-color="white" v-model="email"  type="email" label="Usuário" />
        </div>
    </div>

</template>

<script>


export default {

    data() {
        return {
             email: ''
        }
    }
   
}
</script>


