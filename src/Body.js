
import React, { Component } from 'react';

let couleur = {
    color: ""
}

class Body extends Component {
    render() {

        let date = new Date();
        let temps= date.getHours();
        if (temps< 12) {
            return (
                couleur.color = "red",
                <h1 className="heading" style={couleur} >Good  morning</h1>
            );

        }
        else if (temps< 18) {
            return (
                couleur.color = "green",
                <h1 className="heading" style={couleur}>Good Afternoon</h1>
            );
        }
        else if (temps> 18) {
            return (couleur.color = "blue",
                <h1 className="heading">
                    Good evening
        </h1>)
        }
    }
}
export default Body;