import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import productsApi from "../../../api/productsApi";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonProductList from "../Skeleton/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "250px",
  },

  right: {
    flex: "1 1 0",
  },
}));

function ProductList(props) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  console.log("Log :  productList", productList);

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await productsApi.getAll({ _page: 1, _limit: 10 });
        console.log("Log :  response", response);
        const { data } = response;
        setProductList(data);
      } catch (error) {
        console.log("Log :  Fail to fetch product list =>", error);
      }
      setLoading(false);
    };
    fetchDataProduct();
  }, []);
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <SkeletonProductList quantum={6} /> : <ProductItem productList={productList} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
