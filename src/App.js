import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Card from './components/Card'
import ListCards from './components/listCards'
import ModalSearch from './components/Modal'

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


class App extends Component {
  state = {
    openAdd: false,
    pokemonCards: [],
    myList: []
  }

  componentDidMount = () => {
    this.getCards()
  }

  getCards = () => {
    fetch('http://localhost:3030/api/cards?limit=20', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.cards)
        this.setState({ pokemonCards: data.cards})
      }).catch((error) => {
        console.error(error);
      });
  }

  searchCards = (name,type) => {
    console.log(name)
    fetch(`http://localhost:3030/api/cards?limit=20&name=${name}&type=${type}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ pokemonCards: data.cards})
      }).catch((error) => {
        console.error(error);
      });
  }


  openAddCard = () => {
    console.log('click')
    this.setState({ openAdd: true })
  }

  closeAddCard = () => {
    console.log('click')
    this.setState({ openAdd: false })
  }

  addListCard = (index) => {
    const { pokemonCards, myList} = this.state
    let lists = myList
    let oldLists = pokemonCards
    oldLists.splice(index,1)
    lists.push(
      <Card name={this.state.pokemonCards[index].name} imageUrl={this.state.pokemonCards[index].imageUrl}/>
    )
    this.setState({ myList: lists, pokemonCards: oldLists })
    this.forceUpdate()
  }

  render() {
    console.log('aaa',this.state.myList)
    return (
      <div className="App">
        <div className="title">
          <span>My Pokedex</span>
        </div>
        <ListCards myList={this.state.myList}/>
        <Footer openAddCard={this.openAddCard} />
        <ModalSearch searchCards={this.searchCards} pokemonCards={this.state.pokemonCards} openAdd={this.state.openAdd} closeAddCard={this.closeAddCard} addListCard={this.addListCard}/>
      </div>
    )
  }
}

export default App
