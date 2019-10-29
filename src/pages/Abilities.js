import React, {Component} from 'react'
import {ReactComponent as Pokeball} from '../img/pokeball_cover.svg';

export default class Pokedex extends Component {

  constructor(){
    super();
    // this.state = {
    //   data: [],
    //   loading: false,
    // }
  }
  async componentDidMount(){
    // this.setState({loading: true});
    // try{
    //   const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
    //   const data = await res.json();
    //   this.setState({data: data, loading: false})
    // }catch(err){
    //   console.log(err);
    //   throw err;
    // }
  }

  render(){
    return (
      <h2>abilities</h2>


    );
  }
}
