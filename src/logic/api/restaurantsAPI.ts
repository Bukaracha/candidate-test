
import jsonConfig from '../../../config.json';
import { getRequest, postRequest, patchRequest } from '../../infra/rest/api-request';
import { Restaurant } from './API-Request/get-restaurants-request';

const baseUrl = jsonConfig.baseUrl + '/';

const getRestaurants = async () => {
    return getRequest(baseUrl + 'restaurants');

}

const resetServer = async () => {
    return postRequest(baseUrl + 'reset');

}

const createRestaurant = async (body: Restaurant) => {
    return postRequest(baseUrl + 'restaurant', body)
}

const getRestaurantById = async (id: number) => {
    return getRequest(baseUrl + 'restaurant', id);

}


const fullUpdateRestaurant = async (body: Restaurant) => {
    return patchRequest(baseUrl + 'restaurant/' + body.id, body)
}

export default { getRestaurants, resetServer, createRestaurant, getRestaurantById, fullUpdateRestaurant }