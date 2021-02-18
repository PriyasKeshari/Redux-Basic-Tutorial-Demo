const axios = require("axios");

const instance = axios.create({
  withCredentials: false,
});
function kebabCaseToCamel(str) {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/(\-\w)/g, (matches) => matches[1].toUpperCase());
}

class API {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    /**
     * If there is a - in the entity.name, then change it
     * to camelCase. E.g
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */

    const name = kebabCaseToCamel(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ name, uri }) {
    var endpoints = {};

    const resourceURL =
      uri !== undefined ? `${this.url}/${uri}` : `${this.url}/${name}`;

    endpoints.getAll = ({ config = {} }) => axios.get(resourceURL, config);

    /* endpoints.getOne = ({ id }, { params = {} }, config = {}) =>
      axios.get(`${resourceURL}/${id}`, { params }, { config }); */
    endpoints.getOne = function ({ id }, { config = {} }) {
      return axios.get(`${resourceURL}/${id}`, config);
    };

    endpoints.create = (toCreate, { config = {} }) =>
      axios.post(resourceURL, toCreate, config);

    endpoints.update = function (toUpdate, { config = {} }) {
      if (toUpdate.id !== undefined) {
        return axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config);
      } else {
        return axios.put(`${resourceURL}`, toUpdate, config);
      }
    };

    endpoints.patch = ({ id }, toPatch, config = {}) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, config);

    endpoints.delete = ({ id }, { config = {} }) =>
      axios.delete(`${resourceURL}/${id}`, config);

    //send the data in config
    endpoints.deleteMultiple = ({ config = {} }) =>
      axios.delete(resourceURL, config);
    return endpoints;
  }
}

export default API;
