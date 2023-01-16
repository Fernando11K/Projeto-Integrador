<template>
    <div class="q-pa-md bg-orange-4 glossy">
        <div class="q-gutter-md ">
            <q-input dense bg-color="white" class="shadow-24 " color="primary" v-model="password" :type="isPwd ? 'password' : 'text'"
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


export default {
    data() {
        return {
            password: '',
            isPwd: true,


        }
    }
}
</script>


