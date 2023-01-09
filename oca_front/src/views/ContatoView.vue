<template>
    <div>
       <HeaderPage/>
       <div class="container">
            <div class="row">
                Essa é a pagina de contatos
            </div>
       </div> 
       <FooterPage/>
    </div>
</template>


<script>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default{
    name: 'ContatoView',
    components:{
    HeaderPage,
    FooterPage,
    } 
}
</script>
    

<style scoped>

</style>