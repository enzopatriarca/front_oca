import {http} from '@/services/config'

export default{
    Usuario:() =>{
        return http.get('GetUser')
    },
}