export class UnsplashAPI{
    #BASE_URL="https://api.unsplash.com/search/photos";
  #KEY = "gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58";
  #query = '';
    getPopularPhoto(page){
    const url = `${this.#BASE_URL}?query=popular&page=${page}&per_page=12&orientation=portrait&client_id=${this.#KEY}`;
    return fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error=>console.log(error))
  }

   getPhotoByQuery(page){
    const url = `${this.#BASE_URL}?query=${this.#query}&page=${page}&per_page=12&orientation=portrait&client_id=${this.#KEY}`;
    return fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error=>console.log(error))
  }
  set query(newQuery) {
    this.#query = newQuery;
   } 
}

