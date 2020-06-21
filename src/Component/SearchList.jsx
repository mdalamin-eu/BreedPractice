import React, { Component } from 'react'
//import BreedFeed from ''
import axios from 'axios';

class SearchList extends Component{
    state = {
        searchedData: []
    }
    componentDidMount  (){
    this.searchBreedsByName()
}

componentDidUpdate(prevprops){
    const currentUrlParam = this.props.match.params.breed;
    const prevUrlParam = prevProps.match.params.breed;

    if (currentUrlParam !== prevUrlParam){
        this.searchBreedsByName();
    }
}
searchBreedsByName =()=> {
    const searchedName =this.props.match.paramsbreed;
    axios.get(`https://breedscat.herokuapp.com/api/v1/breeds?name=${searchedName}`)
.then(response =>{
    this.setState({searchedData:response.data})
})
.catch(error =>{
    console.log(error);
    
});

}
render(){
    const {searchedData} = this.state
    return(
        <div>
            <section className="hero-section pt-5 pb-5">
                <div className="container">
                    <h3 className="text-center mb-5">Browse Breeds</h3>
                    <div className="row justify-content-center mt"
                </div>
            </section>
        </div>
    )
}
}