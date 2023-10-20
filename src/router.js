import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound.js";

const routes = {
  "#/": new Home(),
  "#/about": new About(),
  404: new NotFound(),
};
// console.log(routes);
export const renderPage = async () => {
  const path = window.location.hash || "#/"; // 해시가 비어있으면 기본으로 #/

  const selectedPage = routes[path] ?? routes[404];
  //   console.log(selectedPage);
  selectedPage.render();
};
