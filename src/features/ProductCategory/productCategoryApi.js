import { axiosMethod, axiosRequest } from 'src/utils/handleApiRequest';
import makeQuery from 'src/utils/makeQuery';

class ProductCategoryApi {
  constructor() {
    this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    this.productCategoryApiEndpoint = this.apiEndpoint + '/category';
  }

  getAllCategory() {
    return axiosRequest(this.categoryApiEndpoint + `/all`, axiosMethod.GET, null, null);
  }
}

export default new ProductCategoryApi();
