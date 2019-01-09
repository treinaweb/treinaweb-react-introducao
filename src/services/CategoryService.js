import { ApiService } from './ApiService';

const endpoint = 'category';

export const CategoryService = {
    list(){
        return ApiService.get(endpoint);
    }
}