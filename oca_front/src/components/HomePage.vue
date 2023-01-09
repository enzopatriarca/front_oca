<template>
    <div >
        <HeaderPage />
       <div  id="HomePage" class="container">
            <div style="padding-top: 10px;" class="row">
                <h1>Todos os Produtos</h1>
                <div v-if="!produtos.length" class="">
                    <p>Não ha Produtos</p>
                </div>
                    <div id="produto_card" v-for="produto of produtos" :key="produto.id" class="col-md-3">
                        <div class="card" style="width: 18rem;">
                            <img src="@/assets/logo.png" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{produto.Nome}}</h5>
                                <p class="card-text">{{produto.Descricao}}</p>
                                <p>${{produto.preco}}</p>
                                <!-- <a style="margin-right: 10px;" v-bind:href="'/Produto_descricao/'+ produto.id" class="btn btn-success">Detalhes</a> -->
                                <router-link :to="{name:'produtoDescricao', params:{id:produto.id}}" style="margin-right: 10px;" class="btn btn-success">Detalhes</router-link>
                                <button  @click="$store.commit('addTocart',produto)" type="button" class="btn btn-success">Adicionar</button>
                            </div>
                        </div>
                    </div>

            </div>
       </div>
       <FooterPage/>
    </div>
</template>

<script>
// import Produtos from '@/services/Produtos';
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import store from '@/store/index'
    
    export default{
    name: "HomePage",
    components: {
    HeaderPage,
    FooterPage
},
    data() {
        return {
        //    produtos:[], 
           cart:[],
           quantidade:0,
           qtd:[],
           qtd_total:0,
           index:0
        }
    },
    mounted() {
        // Produtos.listar().then(resposta => {
        //     //console.log(resposta.data)
        //     this.produtos = resposta.data
        // })
    },
    methods: {
        // InCart(produto){
        //     return this.cart.indexOf(produto) != -1;
        // },
        // AddToCart(produto){
        //    if(this.InCart(produto)){
        //         this.qtd_total +=1
        //         //this.quantidade +=1;
        //         this.index = this.cart.indexOf(produto)
        //         console.log(this.index)
        //         this.qtd[this.index] = this.quantidade +=1;
        //         console.log('aqui')
        //    }else{
        //         this.qtd_total +=1
        //         this.cart.push(produto);
        //         this.quantidade = 0
        //         //this.index = 0;
        //    }
        // },

    },
    computed:{
        produtos(){
            return store.state.produtos;
        },
        user(){
            return store.state.user;
        }

    },

}

</script>

<style scoped>
    #HomePage{
        margin-top: 15px;
        margin-bottom: 15px;
        background-color: lightgray;
    }
    #produto_card{
        margin-bottom: 10px;
    }
</style>