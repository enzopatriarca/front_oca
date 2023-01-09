import {http} from '@/services/config'

export default{
    listar:() =>{
        return http.get('Categorias')
    }
}