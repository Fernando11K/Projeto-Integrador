<template>
    <div class="q-pa-md bg-orange-4 shadow-24  glossy">
        <div class="q-gutter-md  ">

            <q-input 
            
            dense 
           standout="bg-black text-amber"
            bg-color='white' 
            :modelValue='modelValue'
             @update:modelValue='atualiza'
            type='email' 
            label='Usuário'>
          <template v-slot:prepend>
                    <q-icon  name="fa-solid fa-user"
                     />
                </template>
        
        
        </q-input>
            
            
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


