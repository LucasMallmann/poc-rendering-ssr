import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
function About() {
  return /* @__PURE__ */ jsx("h1", { children: "About" });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Home() {
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Home" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      "Button clicked ",
      counter,
      " times"
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCounter((prevState) => prevState + 1), children: "Click me!" })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const PagePathsWithComponents = /* @__PURE__ */ Object.assign({
  "./pages/About.tsx": __vite_glob_0_0,
  "./pages/Home.tsx": __vite_glob_0_1
});
const routes = Object.keys(PagePathsWithComponents).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: PagePathsWithComponents[path].default
  };
});
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(({ name, path }) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: path, children: name }) }, path);
    }) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function SSRRender(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  SSRRender
};
