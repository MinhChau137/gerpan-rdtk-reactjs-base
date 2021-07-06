import { axiosMethod, axiosRequest } from 'src/utils/handleApiRequest';

class BannerApi {
  constructor() {
    this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    this.bannerApiEndpoint = this.apiEndpoint + '/banner';
  }

  getAllBanners() {
    return axiosRequest(this.bannerApiEndpoint + `/all`, axiosMethod.GET, null, null);
  }
}

export default new BannerApi();
