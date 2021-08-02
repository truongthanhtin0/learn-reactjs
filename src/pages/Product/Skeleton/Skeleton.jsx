import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

function SkeletonProductList(props) {
  const { quantum } = props;
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(quantum)).map((item, index) => {
          return (
            <Grid item key={index} xs={6} sm={4}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SkeletonProductList;
