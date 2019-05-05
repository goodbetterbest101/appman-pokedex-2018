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
        console.log(this.props.num)
        return (
            <div className="container">
                <div className="box">
                    <div className="detail"> 
                        <img src={this.props.imageUrl}/>
                        <div className="textDetail">
                            <span className="name">{this.props.name}</span>
                            <StatusBar name='HP'/>
                            <StatusBar name='STR'/>
                            <StatusBar name='WEAK'/>
                        </div>
                        <div onClick={() => this.props.addListCard(this.props.num) }>
                            ADD
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
