import { TYPE_PRODUCT } from 'src/configs/constants';
import { axiosMethod, axiosRequest } from 'src/utils/handleApiRequest';
import makeQuery from 'src/utils/makeQuery';

class ProductApi {
  constructor() {
    this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    this.productApiEndpoint = this.apiEndpoint + '/product';
  }

  getAllProducts({ name, code, order, type, money, tag, page, pageSize }) {
    const filter = { name, code, order, type, money, tag, page, pageSize };
    const query = makeQuery(filter);
    return axiosRequest(this.productApiEndpoint + `/all/?` + `/${query}`, axiosMethod.GET, null, null);
  }
  getHotProducts() {
    const filter = {type: TYPE_PRODUCT.HOT};
    const query = makeQuery(filter);
    return axiosRequest(this.productApiEndpoint + `/all/?type` + `/${query}`, axiosMethod.GET, null, null);
  }
  getDefaultProducts() {
    const filter = {type: TYPE_PRODUCT.DEFAULT};
    const query = makeQuery(filter);
    return axiosRequest(this.productApiEndpoint + `/all/?type` + `/${query}`, axiosMethod.GET, null, null);
  }

  getProductById({id}){
    return axiosRequest(this.productApiEndpoint + `/${id}`, axiosMethod.GET, null, null);
  }
  
  getProductLiked({id}){
    return axiosRequest(this.productApiEndpoint + `/liked/${id}`, axiosMethod.GET, null, null);
  }
}

export default new ProductApi();
