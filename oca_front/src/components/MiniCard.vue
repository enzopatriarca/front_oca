<template>
    <div>
        <HeaderPage/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">item</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Açoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in carrinho" :key="item.id">
                                <th scope="row">{{item.Nome}}</th>
                                <td><button @click="$store.commit('subtrairqtd',index)" style="margin-right: 4px;" class="btn btn-danger">-</button>{{item.quantidade}} <button  @click="$store.commit('incrementarqtd',index)" class="btn btn-success">+</button></td>
                                <td>${{Math.round(item.preco * item.quantidade)}}</td>
                                <td><button class="btn btn-danger" @click="$store.commit('Remove',index)" >remove </button></td>
                            </tr>
                            <tr>
                                <td>Preço Total:</td>
                                <td>{{carrinhoQuantidade}}</td>
                                <td>${{Math.round(carrinhoTotal)}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{user.nome}}</td>
                                <td>{{user.email}}</td>
                            </tr>
                        </tbody>
                    </table >
                    <div style="display: flex;justify-content: end;">
                        <button  @click="Registar()" class="btn btn-primary">Finalizar Compra</button>
                    </div>
                   
                </div>
            </div>
        </div>
        <FooterPage/>
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import store from '@/store/index'
import axios from "axios";

    export default{
    name: "MiniCard",
    components:{
        HeaderPage,
         FooterPage
    },
    computed:{
        carrinho(){
            return store.state.carrinho;
        },
        carrinhoQuantidade(){
            return this.carrinho.reduce((acc,item) => acc + item.quantidade,0);
        },
        carrinhoTotal(){
            return this.carrinho.reduce((acc,item ) => acc + (item.preco * item.quantidade),0);
        },
        user(){
            return store.state.user;
        }
    },
    methods: {
        Registar(){
            let Produc = []
            // let p_lis = []
            this.carrinho.forEach(produto => {
                Produc.push(produto.id)
                Produc.push(produto.Nome)
                Produc.push(produto.quantidade)
            });
            let params = {}
            params.user = this.user.id;
            params.carrinho = Produc;
            params.total = this.carrinhoTotal;
            //console.log(params)

            axios.post(`http://127.0.0.1:8000/api/Registar`,  params)
                 .then(response => {
                    console.log(response.data)
            });
        }
    },
}
</script>