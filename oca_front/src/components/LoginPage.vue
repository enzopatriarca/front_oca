<template>
    <div>
        <div id="login_container" class="container">
            <div class="row">
                <div id="login_form" class="col">
                   
                    <form @submit.stop.prevent="submit">
                        <h2 id="titulo">Login</h2>
                        <div id="usuario_input">
                            <label for="">Email: </label>
                            <input v-model="email" type="text">
                        </div>
                        <div id="senha_input">
                            <label for="">Senha: </label>
                            <input v-model="password" type="password">
                        </div>
                        <div id="botao_login">
                            <button  type="submit" class="btn btn-secondary">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <FooterPage/>
</template>

<script>
import FooterPage from './FooterPage.vue';
import Cookie from 'js-cookie'
import store from '@/store/index'

export default {
    components: { FooterPage },
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        submit(){
            const payload = {
                email: this.email,
                password: this.password,
            };

           fetch('http://127.0.0.1:8000/api/Login',{
                method:'POST',
                headers:{
                    'Content-Type': 'aplication/json',
                    'Access' : 'aplication/json'
                },
                body:JSON.stringify(payload)
           })
           .then(response => response.json())
            .then(res => {
                Cookie.set('token',res.access_token);
                store.commit('updateUser',res.user)
                console.log(res.user)
            })
            .then(() => this.$router.push(this.$route.query.redirect || '/'))
        }
    },
}
</script>

<style scoped>

    #login_form{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        background-color: lightgray;
    }
    #titulo{
        display: flex;
        justify-content: center;
    }
    #usuario_input{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    #senha_input{
        display: flex;
        justify-content: end;
        margin-bottom: 10px;
    }
    #botao_login{
        display: flex;
        justify-content: center;
    }
</style>