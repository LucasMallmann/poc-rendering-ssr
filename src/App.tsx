import { Link, Route, Routes } from "react-router-dom";

const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true,
});

// The output will be sth like this
// const routes = {
//   './pages/About.tsx': () => import('./pages/About.tsx'),
//   './pages/Home.tsx': () => import('./pages/Home.tsx'),
// };
const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: (PagePathsWithComponents[path] as any).default,
  };
});

export function App() {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />} />;
        })}
      </Routes>
    </>
  );
}
