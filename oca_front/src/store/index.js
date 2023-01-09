import { createStore } from "vuex";
// import axios from "axios";
import Produtos from '@/services/Produtos';
import Categorias from '@/services/Categorias';
import Usuario from "@/services/Usuario";
const store = createStore({
    state:{
        counter: 1,
        produtos:[],
        carrinho:[],
        pedidos:{},
        categorias:[],
        user:[],

    },
    getters:{

    },
    mutations:{
        incrementar (state) {
            state.counter++
        },
        subtrair (state){
            state.counter--
        },
        updateProdutos(state, produtos){
            state.produtos = produtos;
        },
        addTocart(state,produto){
            if (!state.user ) {
                window.location.href = "http://localhost:8080/Login"
            }
            let indexproduto = state.carrinho.findIndex(item => item.id === produto.id);
            if (indexproduto != -1) {
                state.carrinho[indexproduto].quantidade++;
                return
            }
            produto.quantidade = 1;
            state.carrinho.push(produto)
        },
        Remove(state,index){
            console.log(state.carrinho[index])
            var dummy = state.carrinho.slice();
            dummy.splice(index, 1);
            state.carrinho = dummy;
        },
        updatePedidos(state,pedidos){
            state.pedidos = pedidos;
        },
        updateCarrinho(state,carrinho){
            state.carrinho = carrinho;
        },
        incrementarqtd(state,index){
            state.carrinho[index].quantidade++
        },
        subtrairqtd(state,index){
            if ( state.carrinho[index].quantidade > 0) {
                state.carrinho[index].quantidade--
                if (state.carrinho[index].quantidade == 0) {
                    var dummy = state.carrinho.slice();
                    dummy.splice(index, 1);
                    state.carrinho = dummy;
                }
            }
            
        },
        updateCategorias(state,categorias){
            state.categorias = categorias;
        },
        updateUser(state,user){
            state.user = user;
        }

    },
    actions:{
        getProdutos({commit}){
            Produtos.listar().then(resposta =>{
                commit('updateProdutos', resposta.data)
            })
        },
        getCategorias({commit}){
            Categorias.listar().then(resposta => {
                // this.categorias = resposta.data;
                commit('updateCategorias',resposta.data)
            })
        },
        clearCarrinho({commit}){
            commit('updateCarrinho',[]);
        },
        getUser({commit}){
            Usuario.Usuario().then(resposta =>{
                //console.log(resposta.data)
                commit('updateUser', resposta.data)
            })
        },
    },
})

export default store;