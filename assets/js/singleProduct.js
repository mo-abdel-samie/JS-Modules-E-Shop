import "../lib/bootstrap-5.3.1-dist/js/bootstrap.bundle.js";
import { linksData } from "./DataSets.js";
import {
  addNavLink,
  addSigleProductCard,
  createNavLink,
  createSigleProductCardUi,
  getData,
  getUrlParam,
} from "./utils.js";

linksData.forEach((link) => {
  const linkUi = createNavLink(link);
  addNavLink(linkUi);
});

console.log(getUrlParam("id"));

getData(`https://fakestoreapi.com/products/${getUrlParam("id")}`, (product) => {
  // console.log(product);

  addSigleProductCard(createSigleProductCardUi(product));
});
