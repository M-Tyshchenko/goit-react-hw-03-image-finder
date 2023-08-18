import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, GlobalStyles } from './GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from 'api';
import { BarLoader } from 'react-spinners';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    perPage: 12,
    loading: false,
    totalHits: null,
  };

  componentDidMount() {
    const { query, page } = this.state;

    this.setState({ loading: true });

    setTimeout(async () => {
      const fetch = await fetchImages(query, page);
      const images = fetch.hits;
      console.log(fetch.totalHits);

      this.setState({ images, loading: false, totalHits: fetch.totalHits });
    }, 1000);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const currentQuery = query.slice(query.indexOf('/') + 1, query.length);

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });

      // console.log(`HTTP запит за ${currentQuery} та page ${page}`);

      try {
        const fetch = await fetchImages(currentQuery, page);
        const images = fetch.hits;

        if (!images.length) {
          this.setState({ loading: false });
          throw new Error();
        }
        console.log('imgs from fetch', images);
        console.log(fetch.totalHits);

        if (page > prevState.page) {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            loading: false,
            totalHits: fetch.totalHits,
          }));
          return;
        }

        this.setState({ images, loading: false, totalHits: fetch.totalHits });
      } catch (error) {
        alert('Oops! No images for this query');
      }
    }
  }

  componentWillUnmount() {}

  changeQuery = newQuery => {
    this.setState({
      query: `${nanoid(10)}/${newQuery}`,
      images: [],
      page: 1,
      totalHits: null,
    });
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { query, page, perPage, images, loading, totalHits } = this.state;
    const totalPages = Math.ceil(totalHits / perPage);
    return (
      <Container>
        <SearchBar changeQuery={this.changeQuery} />
        {loading ? (
          <BarLoader color="#3f51b5" width="100%" />
        ) : (
          <ImageGallery images={images} />
        )}
        {totalPages !== page && (
          <LoadMoreBtn loadMoreHandler={this.loadMoreHandler} />
        )}

        <GlobalStyles />
      </Container>
    );
  }
}
