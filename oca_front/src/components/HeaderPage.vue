<template>
    <div style="background-color: lightgrey;" >
            <div style="justify-content: center;" class="container">
                <div class="row">
                    <!-- <p>{{user}}</p> -->
                    <!-- <p>{{categorias}}</p> -->
                    <nav class="navbar navbar-light ">
                        <router-link  :to="{name:'HomeView'}">
                            <img  id="logo" src="@/assets/logo.png" alt="">
                        </router-link>
                       
                        <!-- <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">buscar</button>
                        </form> -->
                        <div id="Top_Menu" >
                            <router-link style="margin-right: 10px;text-decoration: none;color: black;"  :to="{name:'Checkout'}">
                                <a class="dropdown-item" href="">
                                    <span id="total_produtos">{{$store.state.carrinho.length}}</span>
                                    <img src="@/assets/cart3.svg" alt="">
                                </a>
                            </router-link>
                            <router-link  :to="{name:'Contato'}"  >
                                <img src="@/assets/person-circle.svg" alt=""> 
                            </router-link>

                            <div v-if="user">
                                <p  style="margin-left: 10px;">{{user.nome}}</p>
                            </div>
                            <div v-else>
                                <router-link  :to="{name:'Login'}"  >
                                    <img style="margin-left: 10px;"  src="@/assets/box-arrow-in-right.svg" alt="">
                                </router-link>
                            </div>
                             
                            <!-- <p style="margin-left: 10px;"> <a style="text-decoration: none;color: black;" href="/login">Entrar</a></p> -->
                            <!-- <button   id="botao_carrino" style="margin-left: 10px;" type="button"> Carrinho</button> -->
                            <!-- <p style="margin-left: 10px;" > <img src="@/assets/cart3.svg" alt=""><a style="text-decoration: none;color: black;" href="">Carrinho</a></p> -->
                        </div>
                    </nav>                    
                </div>
            </div>

        <div class="container" >
            <div class="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <router-link :to="{name:'HomeView'}" class="nav-link active" aria-current="page" >Pagina Principal</router-link>
                            </li>
                            <!-- <li class="nav-item">
                            <a class="nav-link" href="/Produtos">Todos os Produtos</a>
                            </li> -->
                            <!-- <li class="nav-item">
                            <a class="nav-link" href="#">ofertas</a>
                            </li> -->
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Mais Categorias
                            </a>
                            <ul style="width:200px"  class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li v-for="categoria of categorias" :key="categoria.id">
                                    <router-link  style="text-decoration: none;color: black;"  :to="{name:'produtoporcategoria', params:{id:categoria.id}}">
                                        <a  style="text-decoration: none;color: black;" class="dropdown-item" href="">{{categoria.Nome}}</a>
                                    </router-link>
                                    <!-- <a class="dropdown-item"  v-bind:href="'/Produtos/'+ categoria.id" >{{categoria.Nome}}</a> -->
                                    <!-- <router-link class="dropdown-item"  :to="{name:'produtoporcategoria', params:{id:categoria.id}}" >{{categoria.Nome}}</router-link> -->
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    // import Categorias from '@/services/Categorias';
    import store from '@/store/index'
    export default{
        name: 'HeaderPage',
        props:{
            // carrinho:{

            // },
            // qtd:Number,
            // qtd_produtos:{

            // },
            // total:Number,
        },
        data() {
            return {
                // categorias:[],
            }
        },
        mounted() {
            // Categorias.listar().then(resposta => {
            //     this.categorias = resposta.data;
            // })
        },
        methods: {

        },
        computed:{
            categorias(){
                return store.state.categorias;
            },
            user(){
                //console.log(store.state.user)
                return store.state.user;
            },
        }
    }

</script>

<style scoped>
    #logo{
        width: 40px;
        height: 40px;
    }
    #Top_Menu{
        display: flex;
    }
    #botao_carrino{
        background-color: lightgray;
        display: flex;
        justify-content: baseline;
        border: none;
        align-items: baseline;
    }

    #total_produtos{
        background-color: lightgreen;
        display: inline;
        border-radius: 10px;
        padding: 5px;
    }
    #logo_carrinho{
        width: 15px;
        height: 15px;
    }
</style>