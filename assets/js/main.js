import "../lib/bootstrap-5.3.1-dist/js/bootstrap.bundle.js";
import { getElement, createNavLink, addNavLink, getData } from "./utils.js";
import { linksData } from "./DataSets.js";

// const divs = getElement("#bg-yellow");
// console.log(divs);

// console.log(createNavLink(linksData[1]));

linksData.forEach((link) => {
  const linkUi = createNavLink(link);
  addNavLink(linkUi);
});

getData("https://fakestoreapi.com/products", (products) => {
    console.log(products);   
});
