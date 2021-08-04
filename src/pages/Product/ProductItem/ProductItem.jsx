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
                    height={250}
                  />
                </Box>
                <Box paddingLeft={2} paddingRight={2}>
                  <Typography>{item.name}</Typography>
                  <Typography>
                    <Box display="flex" text-align="center">
                      <Box components="span" fontSize="18px" fontWeight="bold" marginRight={2} marginY="auto">
                        {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.salePrice)}
                      </Box>
                      <Box components="span" fontSize="24px" fontWeight="bold" color="red">
                        {item.promotionPercent > 0 ? `-${item.promotionPercent}%` : ""}
                      </Box>
                    </Box>
                  </Typography>
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
