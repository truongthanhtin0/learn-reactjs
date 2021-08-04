import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import productsApi from "../../../api/productsApi";
import ProductFilters from "../../ProductFilters/ProductFilters";
import ProductItem from "../ProductItem/ProductItem";
import ProductSort from "../ProductSort/ProductSort";
import SkeletonProductList from "../Skeleton/Skeleton";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
  },

  left: {
    width: "250px",
  },

  right: {
    flex: "1 1 0",
  },

  pagination: {
    marginTop: "12px",
    paddingBottom: "12px",
  },
}));

function ProductList(props) {
  const [loading, setLoading] = useState(true);

  const [productList, setProductList] = useState([]);
  console.log("Log :  productList", productList);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: "salePrice:ASC",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    start: 120,
  });

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await productsApi.getAll(filters);
        console.log("Log :  response", response);
        const { data, pagination } = response;
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Log :  Fail to fetch product list =>", error);
      }
      setLoading(false);
    };
    fetchDataProduct();
  }, [filters]);

  const handlePaginationChang = (e, page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  };

  const handleSortChange = (newValue) => {
    setFilters({
      ...filters,
      _sort: newValue,
    });
  };

  const handleFiltersChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container spacing={1} className={classes.root}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              Left Column
              <ProductFilters filters={filters} onChangFilters={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentValue={filters._sort} onChange={handleSortChange} />
              {loading ? <SkeletonProductList quantum={9} /> : <ProductItem productList={productList} />}
              <Pagination
                className={classes.pagination}
                count={Math.ceil(pagination.start / pagination.limit)}
                page={pagination.page}
                color="primary"
                onChange={handlePaginationChang}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
