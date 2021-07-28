import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "@src/pages/Landing";
import Gallery from "@pages/gallery";
import GalleryDetails from "@pages/gallery/detail";
import Example from "@pages/Example";

import PageNotFound from "@pages/PageNotFound";

const ClientRouter: JSX.Element = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/gallerydetails/:id" component={GalleryDetails} />
        <Route component={PageNotFound} exact />
      </Switch>
    </Router>
  </>
);

export default ClientRouter;
