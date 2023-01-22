<template>
    <div class=" q-pa-md bg-orange-4 glossy">
        <div class=" ">
            <q-input 
                dense 
                bg-color="white" 
                class="shadow-24 " 
                color="primary" 
                :modelValue='modelValue'
                @update:modelValue='atualiza'
                :type="isPwd ? 'password' : 'text'"
                label="Senha" outlined>
                <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                        @click="isPwd = !isPwd" />
                </template>
                
            </q-input>
        </div>
    </div>

</template>

<script>

import { ref } from 'vue'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    data () {
        return {
            
            isPwd: ref(true)


        }
    },
    methods: {
        atualiza(value) { 
            this.$emit('update:modelValue', value)
            
        }
    },
}
</script>


