import React, { Component } from 'react';
import data from "./data"; 

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
            <p style={{color:"Black"}}>
            {Array.map(item => (
                <div>
                <h2>{item.name}</h2>
                <h4>{item.price}</h4>
                <p>{item.ingredients}</p>
                </div>
            ))}
		</p>
        );
    }
} 
export default App;