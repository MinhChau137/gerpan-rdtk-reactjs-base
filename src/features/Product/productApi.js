import { axiosMethod, axiosRequest } from 'src/utils/handleApiRequest';
import makeQuery from 'src/utils/makeQuery';

class ProductApi {
  constructor() {
    this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    this.productApiEndpoint = this.apiEndpoint + '/products';
  }

  getAllProducts({ name, page, limit }) {
    const filter = { name, page, limit };
    const query = makeQuery(filter);
    return axiosRequest(this.productApiEndpoint + `/${query}`, axiosMethod.GET, null, null);
  }
}

export default new ProductApi();
