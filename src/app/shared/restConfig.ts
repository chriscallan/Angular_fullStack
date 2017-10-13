import { baseURL } from './baseurl';

export function RestangularConfigFactory(RestangularProvider: any){
    RestangularProvider.setBaseUrl(baseURL); 
}