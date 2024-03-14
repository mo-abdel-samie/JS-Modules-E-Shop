import "../lib/bootstrap-5.3.1-dist/js/bootstrap.bundle.js";
import {
  createNavLink,
  addNavLink,
  getData,
  addProductCard,
  createProductCardUi,
  getUrlParam,
} from "./utils.js";
import { linksData } from "./DataSets.js";

// const divs = getElement("#bg-yellow");
// console.log(divs);

// console.log(createNavLink(linksData[1]));

linksData.forEach((link) => {
  const linkUi = createNavLink(link);
  addNavLink(linkUi);
});

getData("https://fakestoreapi.com/products", (products) => {
  products.forEach((product) => addProductCard(createProductCardUi(product)));
});

console.log(getUrlParam("id"));
