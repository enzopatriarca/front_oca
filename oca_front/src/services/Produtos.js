import {http} from '@/services/config'

export default{
    listar:() =>{
        return http.get('Produtos')
    },
    listarPorcatId:() =>{
        return http.get('Produtos/')
    }
}