<template>
    <div >
        <HeaderPage/>
        <div id="Produtos_cat"  class="container">
            <div class="row">
                <h2></h2>
                <div  id="produto_card" v-for="produto of produtos" :key="produto.id" class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/logo.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{produto.Nome}}</h5>
                            <p class="card-text">{{produto.Descricao}}</p>
                            <p class="card-text">{{produto.preco}}</p>
                            <router-link :to="{name:'produtoDescricao', params:{id:produto.id}}" style="margin-right: 10px;" class="btn btn-success">Detalhes</router-link>
                            <a @click="$store.commit('addTocart',produto)"  class="btn btn-success">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterPage/>
    </div>
</template>

<script>
    //  import Produtos from '@/services/Produtos';
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';    
import axios from "axios";

// import store from '@/store/index'

    export default{
    name: "ProdutosPage",
    components: {
    HeaderPage,
    FooterPage
},
    data() {
        return {
            produtos:[

            ],
            //cart:[],
        }
    },

    mounted() {
        axios.get('http://127.0.0.1:8000/api/Produtos/' + this.$route.params.id).then(
            response =>{
                this.produtos = response.data
            })
    },
    computed:{
        
    }
}

</script>

<style scoped>
    #Produtos_cat{
        padding-bottom: 275px;
        background-color: lightgray;
    }
    #produto_card{
        margin-bottom: 10px;
    }
</style>