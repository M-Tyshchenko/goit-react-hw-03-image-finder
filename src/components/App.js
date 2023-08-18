import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, GlobalStyles } from './GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from 'api';

// const initialState = {
//   query: '',
//   images: [],
//   pages: 1,
// };

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  async componentDidMount() {
    const images = await fetchImages();
    console.log(images);
    this.setState({ images });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log(
        `HTTP запит за ${this.state.query.slice(
          this.state.query.indexOf('/') + 1,
          this.state.query.length
        )} та page ${this.state.page}`
      );
      //HTTP запит за query
      // this.setState({images: результат запиту})
    }
  }

  componentWillUnmount() {}

  changeQuery = newQuery => {
    this.setState({
      query: `${nanoid(10)}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <Container>
        <SearchBar changeQuery={this.changeQuery} />
        <ImageGallery images={images} />
        <LoadMoreBtn loadMoreHandler={this.loadMoreHandler} />

        <GlobalStyles />
      </Container>
    );
  }
}
