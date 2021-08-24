import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Grid } from "@material-ui/core";

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
  container: {
    margin: "auto",
    marginTop: "50px",
    width: "80%",
  },
  root: {
    width: 250,
    height: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  actionCard: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0px",
    alignItems: "center",
  },
});

export function ProductCard() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
    >
      {data.products.map((product) => (
        <Grid key={product.id} item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="h2">
                  {product.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className={classes.actionCard}>
              <Typography variant="subtitle2">
                Price: {product.price}
              </Typography>
              <Button size="small" variant="contained" color="primary">
                add to basket
              </Button>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

{
  /* <Grid container justifyContent="center" spacing={spacing}>
  {data.products.map((product) => (
    <Grid key={product.id} item>
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
    </Grid>
  ))}
</Grid>; */
}

// return (
//     <>
//       {data.products.map((product) => (
//         <Card className={classes.root} key={product.id}>
//           <CardMedia
//             className={classes.media}
//             image={product.image}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {product.name}
//             </Typography>
//           </CardContent>
//           <div className={classes.actionCard}>
//             <Typography> Price: {product.price}</Typography>
//             <Button size="small" variant="contained" color="primary">
//               add to basket
//             </Button>
//           </div>
//         </Card>
//       ))}
//     </>
//   );
// }
