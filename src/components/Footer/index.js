import React, { Component } from 'react'
import '../../styles/footer.css'

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

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="circle" >
                    +
                </div>
                <div className="Footer" />
            </div>
        )
    }
}

export default Footer
