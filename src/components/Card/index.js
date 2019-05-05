import React, { Component } from 'react'
import StatusBar from '../statusBar'
import '../../styles/card.css'

const COLORS = {
    Psychic: "#f8a5c2",
    Fighting: "#f0932b",
    Fairy: "#c44569",
    Normal: "#f6e58d",
    Grass: "#badc58",
    Metal: "#95afc0",
    Water: "#3dc1d3",
    Lightning: "#f9ca24",
    Darkness: "#574b90",
    Colorless: "#FFF",
    Fire: "#eb4d4b"
}

class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="detail"> 
                        <img src="https://images.pokemontcg.io/ex8/98.png"/>
                        <div className="textDetail">
                            <span className="name">Name</span>
                            <StatusBar/>
                            <StatusBar/>
                            <StatusBar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
