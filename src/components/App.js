import { Container, GlobalStyles } from './GlobalStyle';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

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

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  changeQuery = newQuery => {
    this.setState({ query: newQuery });
  };

  setImages = () => {};

  render() {
    return (
      <Container>
        <SearchBar changeQuery={this.changeQuery} />
        <ImageGallery />
        <LoadMoreBtn />

        <GlobalStyles />
      </Container>
    );
  }
}
