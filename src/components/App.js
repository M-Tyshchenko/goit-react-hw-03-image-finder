import { Container, GlobalStyles } from "./GlobalStyle";
import React, { Component } from 'react'
import { SearchBar } from "./SearchBar/SearchBar";

// const initialState = {
//   query: '',
//   images: [],
//   pages: 1,
// };

export class App extends Component {
  state = {
    query: '',
    images: [],
    pages: 1,
  };

  componentDidMount() { }
  
  componentDidUpdate(prevProps, prevState) { }
  
  componentWillUnmount() { }

  changeQuery = () => { }
  
  setImages = () => { }
  

  render () {
  return (
    <Container>
      <SearchBar/>

      <GlobalStyles/>
    </Container>
    );
    }
};
