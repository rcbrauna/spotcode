import React, { Fragment } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import Routes from "./routes";
import Menu from "./components/common/menu";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
