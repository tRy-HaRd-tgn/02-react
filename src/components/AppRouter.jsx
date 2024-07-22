import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import { routes } from "../router";
const AppRouter =() =>  {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  );
}
export default AppRouter