import http from "../http-common";
// all of the node stuff here
// here's where we will fetch the pet data
class getPetInfo {
  getAll(page) {
return http.get(`pets?page=${page}`)
  }
  getPet(id) {
    return http.get(`/pets?id=${id}`);
  }
}
export default new getPetInfo();