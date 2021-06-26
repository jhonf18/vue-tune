import Axios from 'axios';

const ROOT_API = 'https://api.deezer.com';

export default class Repository {
  async getDiscoverMusic() {
    const result = await Axios.get(`${ROOT_API}/chart/O/tracks?index=0&limit=5&output=jsonp`);
    return result.data.data;
  }
  
  async getMoreDataDiscover(index) {
    const result = await Axios.get(`${ROOT_API}/chart/O/tracks?index=${index}&limit=5`)
    return result.data.data;
  }

  async getRadios() {
    const result = await Axios.get(`${ROOT_API}/radio`);
    return result.data.data;
  }

  async getTracksByRadio(id) {
    const result = await Axios.get(`${ROOT_API}/radio/${id}/tracks`);
    return result.data.data;
  }

  async getGenres() {
    const result = await Axios.get(`${ROOT_API}/genre`);
    return result.data.data;
  }

  async getTracksBySearch(search) {
    const result = await Axios.get(`${ROOT_API}/search?q=${search}`);
    return result.data.data;
  }
}