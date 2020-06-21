import React, { Component } from 'react'
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Layout/Navbar'
//import Breeds from './Layout/Breeds'
class App  extends Component{
  render() {
    return(
      <div>
        <Router >
          <Navbar/>
        </Router>
      </div>
    )
  }
}
export default App; 