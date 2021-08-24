import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      slug
      image
      price
    }
  }
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  actionCard: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3px 0px",
  },
});

export function ProductCard() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data.products.map((product) => (
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
          </CardContent>
          <div className={classes.actionCard}>
            <Typography> Price: {product.price}</Typography>
            <Button size="small" variant="contained" color="primary">
              add to basket
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
}
