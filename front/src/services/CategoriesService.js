import HttpClient from './utils/HttpClient';

import CategoriesMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:8080');
  }

  async listCategories() {
    const categories = await this.httpClient.get('/categories');

    return categories.map(CategoriesMapper.toDomain);
  }
}

export default new CategoriesService();
