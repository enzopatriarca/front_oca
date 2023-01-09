<template>
    <div >
        <HeaderPage/>
        <div id="Produto_Descricao" class="container">
            <div class="row">
                <div v-if="!produto" class="">
                    <h2>Nao existe Produto</h2>
                </div>    
                <div   id="Imagen_Produto" class="col">
                   <img id="imagen" src="@/assets/logo.png" alt="">
                </div>
                <div style="background-color:lightgray" class="col">
                    <div id="produto_coluna">
                        <h2>{{produto.Nome}}</h2>
                        <p>{{produto.Descricao}}</p>
                        <h2>${{produto.preco}}</h2>
                    </div>
                    <div id="butoes">
                        <!-- <button v-on:click="$store.commit('subtrair')" type="button" class="btn btn-danger"> - </button> <span>{{contador}}</span> <button v-on:click="$store.commit('incrementar')" id="botao_add" type="button" class="btn btn-success"> + </button> -->
                        <button  @click="$store.commit('addTocart',produto)" type="button" class="btn btn-success">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <FooterPage/>
    </div>
</template>

<script>
    // import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
import FooterPage from "./FooterPage.vue";
import store from '@/store/index'

    export default{
    name: "ProdutoDescri",
    components: {
    HeaderPage,
    FooterPage
},
    el: '#butoes',
    data() {
        return {
            // produto:[
            // ],
            // counter: 1
        }
    },
    computed:{
        contador(){
            return store.state.counter;
        },
        produtos(){
            return store.state.produtos;
        },
        produto(){
            return this.produtos.find(produto => produto.id == this.$route.params.id)
        }
    },
    mounted() {
        // axios.get('http://127.0.0.1:8000/api/Produto/' + this.$route.params.id).then(
        //     response =>{
        //         //console.log(response.data)
        //         this.produto = response.data
        //     })
    },
}

</script>

<style scoped>
    #Produto_Descricao{
        margin-top: 80px;
        padding-bottom: 321px;
    }
    #Imagen_Produto{
        width: 100%;
        height: 400px;
        display: flex;
        background-color: lightgray;
        margin-right: 10px;
    }
    #imagen{
        align-content: center;
    }
    #produto_coluna{
        display: block;
        text-align: center;
    }
    #butoes{
        display: block;
        text-align: center;
    }
    #botao_add{
        margin-right: 10px;
    }
</style>