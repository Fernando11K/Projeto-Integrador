<template>
    <div class="q-pa-md bg-orange-4 shadow-24  glossy">
        <div class="q-gutter-md  ">

            <q-input 
            dense 
            outlined 
            bg-color='white' 
            :modelValue='modelValue'
             @update:modelValue='atualiza'
            type='email' 
            label='Usuário' />
            
        </div>
    </div>

</template>

<script>


export default {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    data() {
        return {
            
        }
    },
    methods: {
        atualiza(value) { 
            this.$emit('update:modelValue', value)
          
        }
    },
   
}
</script>


