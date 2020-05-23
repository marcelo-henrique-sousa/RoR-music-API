import Api from './api';

const RecentlyHeardService = {
  //index: () => Api.get('/dashboard'),
  //show: (id) => Api.get(`/albums/${id}`)
  create: (id) => Api.post(`/albums/${id}/recently_heards`),
};

export default RecentlyHeardService;