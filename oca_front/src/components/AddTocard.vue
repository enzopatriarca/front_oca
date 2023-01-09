<template>
    <div>
        
    </div>
</template>

<script>
    export default{
        name:'AddTocard',
        props:{
            nome:String,
            descricao:String,
            preco: String,
            produtoid:String,
        },
        data() {
            return {
                item:{
                    produtoNome: this.nome,
                    produtoDescricao: this.descricao,
                    produtoPreco: this.preco,
                    produtoId: this.produtoid,
                }
            }
        },

        methods:{
            addTocard(){
                
            }
        }
    }
</script>