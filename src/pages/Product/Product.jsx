import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductList from "./ProductList/ProductList";

function Product(props) {
  const match = useRouteMatch();

  return (
    <Box mt={4}>
      <Switch>
        <Route path={match.url} component={ProductList} exact />
      </Switch>
    </Box>
  );
}

export default Product;
