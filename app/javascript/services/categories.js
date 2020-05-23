import Api from './api';

const CategorieService = {
  index: () => Api.get(`/categories`),
  show: (id) => Api.get(`/categories/${id}`),
}

export default CategorieService;