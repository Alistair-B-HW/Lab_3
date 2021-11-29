const getCatalogue = (request, response) => {
  const catalogServices = require("../services/productServices.js");
  catalogServices.searchService(function (err, rows) {
    response.json(rows);
    response.end();
  });
};

const getProductByID = (request, response) => {
  const catalogServices = require("../services/productServices.js");
  let reference = request.params.reference;
  catalogServices.searchIDService(reference, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

const getProductsByCategory = (request, response) => {
  const catalogServices = require("../services/productServices.js");
  let reference = request.params.category;
  catalogServices.searchCategoryService(reference, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

module.exports = {
  getCatalogue,
  getProductByID,
  getProductsByCategory
};
