import {createRouter,  createWebHistory   } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import ProdutoView from '@/views/ProdutoView';
import ContatoView from '@/views/ContatoView';
import ProdutoDescricao from '@/views/ProdutoDescricao';
import CarrinhoView from '@/views/CarrinhoView';
import LoginView from '@/views/LoginView';
const history = createWebHistory ();

const router = createRouter({
    history,
    routes:[{
            path: '/',
            name: 'HomeView',
            component: HomeView
        },{
            path: '/Produtos/:id',
            name:'produtoporcategoria',
            component: ProdutoView
        },{
            path: '/Produto_descricao/:id',
            name:'produtoDescricao',
            component: ProdutoDescricao
        },{
            path: '/Contato',
            name:'Contato',
            component: ContatoView
        },{
            path: '/Login',
            name:'Login',
            component: LoginView
        },{
            path: '/Carrinho',
            name:'Checkout',
            component: CarrinhoView,
        }
    ]
});



export default router;