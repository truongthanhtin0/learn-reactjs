import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

function ProductItem(props) {
  const { productList } = props;
  return (
    <Box padding={1}>
      <Grid container>
        {productList.map((item, index) => {
          return (
            <Grid item key={`${index}-${item.id}`} xs={6} sm={4}>
              <Box padding={1}>
                <Box padding={2}>
                  <img
                    src={
                      item.thumbnail
                        ? `https://api.ezfrontend.com${item.thumbnail.url}`
                        : `https://via.placeholder.com/444`
                    }
                    alt={item.name}
                    width="100%"
                    height={200}
                  />
                </Box>
                <Box paddingLeft={2} paddingRight={2}>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.salePrice}</Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductItem;
