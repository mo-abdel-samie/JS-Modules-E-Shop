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
