import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import HeaderOnly from "./component/Layout/HeaderOnly";
import DefaultLayout from "./component/Layout/DefaulLayout";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if(route.layout) {
            Layout = route.layout;
          }
          else if (route.layout === null ){
            Layout = Fragment;
          }
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />;
        }
        )}
      </Routes>
    </Router>
  );
}

export default App;
