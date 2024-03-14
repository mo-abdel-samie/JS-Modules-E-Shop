export const getElement = (selctor) => {
  return document.querySelector(selctor);
};

export const createNavLink = (linkInfo) => {
  return `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${linkInfo.url}">${linkInfo.title}</a>
            </li>`;
};

export const addNavLink = (liunkUi) => {
  const navLinks = getElement("#navLinks");
  navLinks.innerHTML += liunkUi;
};

export const getData = (url, cb) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => cb(json));
};

export const createProductCardUi = (productObj) => {
  return `<div class="col-md-4 col-lg-3 p-2">
              <div class="card py-3">
                  <div class="d-flex p-3 mb-2">
                    <img style="height: 250px" class="mx-auto img-fluid" src="${
                      productObj.image
                    }" alt="Title" />
                  </div>
                  <div class="card-body">
                      <h4 class="card-title">${
                        productObj.title.length > 20
                          ? productObj.title.slice(0, 17) + "..."
                          : productObj.title
                      }</h4>
                      <p class="card-text">${
                        productObj.description.length > 50
                          ? productObj.description.slice(0, 45) + "..."
                          : productObj.descriptio
                      }</p>
                      <p class="card-text">${productObj.price}</p>
                  </div>
                  <div class="d-flex">
                    <a
                        href="singleProduct.html?id=${productObj.id}"
                        type="button"
                        class="btn btn-primary mx-auto"
                    >
                        Read more
                    </a>
                  </div>
              </div>
          </div>`;
};

export const addProductCard = (cardUi) => {
  getElement("#productsContainer").innerHTML += cardUi;
};

export const getUrlParam = (param) => {
  const quer = window.location.search;
  const urlp = new URLSearchParams(quer);
  return urlp.get(param);
};

export const createSigleProductCardUi = (productObj) => {
  return ` <div class="row align-items-center my-4 p-2 border">
            <div class="col-lg-6">
                <img class="img-fluid" src="${productObj.image}" alt="">
            </div>
            <div class="col-lg-6">
                <h2>${productObj.title}</h2>
                <p>${productObj.description}</p>
                <p>${productObj.price}</p>
                <a
                    href="singleProduct.html?id=${productObj.id}"
                    type="button"
                    class="btn btn-primary mx-auto"
                >
                        Buy now
                    </a>
            </div>
        </div>`;
};

export const addSigleProductCard = (cardUi) => {
  getElement("#singleProduct").innerHTML += cardUi;
};
