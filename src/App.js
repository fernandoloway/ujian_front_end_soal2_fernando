
import React, { Component } from 'react';

import axios from 'axios';
import ListPlayer from './components/ListPlayer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      team: '',
      data: []
    }
  }
  getData = keyword =>
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${keyword}`)
      .then(res => this.setState({ data: res.data.player }))
      .catch(err => console.log(err))


  render() {

    return (
      <div className="container-fluid" id="outerWrapper">
        <div className="container-fluid" id="innerWrapper">
          <div id="landingPage">
            <div className="row">
              <h1>{`Daftar Pemain ${this.state.team}`}</h1>
            </div>
            <div className="row">
              <div className="col-sm-8 ">
                <input type="text" onChange={() => this.setState({ team: this.refs.inputSearch.value })} ref="inputSearch" className="form-control" id="inputSearch" placeholder="Barcelona" />
              </div>
              <div classname="col-sm-4">
                <button className="btn btn-success" onClick={() => this.getData(this.refs.inputSearch.value)} >Lihat Daftar</button>
              </div>
            </div>
          </div>
        </div>

        <div id="listPlayer">
          {this.state.data.map(x => <ListPlayer key={x.idPlayer} {...x} />)}
        </div>


      </div>
    );
  }
}

export default App;