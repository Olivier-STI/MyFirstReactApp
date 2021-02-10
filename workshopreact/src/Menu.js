import React, { Component } from 'react';
import data from "./data"; 

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
var Pizza = data.Pizza;
var Array = [];
var AllData = {};
for (var i in Pizza) {
    var item = Pizza[i];
    Array.push({
        "name": item.name,
        "price": item.price,
        "ingredients": item.ingredients,
        "image": item.image
    })
}
AllData.Pizza = Pizza;

class App extends Component {
    render() {
		return (
            
<Card className={makeStyles.root}>
    {Array.map(item => (
        <Typography>
            <CardActionArea>
                <CardMedia
                className={makeStyles.media}
                image={item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    {item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.ingredients}
                </Typography>
            </CardContent>
        </CardActionArea>
      </Typography>
    ))}
</Card>
        )}}; 
export default App;