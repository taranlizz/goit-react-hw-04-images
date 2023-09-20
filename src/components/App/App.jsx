import { Toaster } from 'react-hot-toast';
import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { getGalleryItems } from 'galleryApi';
import { Loader } from 'components/Loader/Loader';
import * as notificationAPI from 'galleryNotificationApi';

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    isLoading: false,
    showLoadMore: false,
  };

  componentDidUpdate = async (_, prevState) => {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      const { query, page } = this.state;

      try {
        this.setState({
          isLoading: true,
        });

        const { hits, totalHits } = await getGalleryItems(query, page);

        this.setState(state => ({
          items: [...state.items, ...hits],
          showLoadMore: this.state.page < Math.ceil(totalHits / 12),
        }));

        notificationAPI.success(totalHits, page);
        notificationAPI.info(totalHits, page);
      } catch (error) {
        notificationAPI.error();
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  };

  onSearchSubmit = value => {
    this.setState({
      query: `${Date.now()}/${value}`,
      items: [],
      page: 1,
    });
  };

  onLoadMoreClick = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { items, isLoading, showLoadMore } = this.state;

    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <SearchBar onSubmit={this.onSearchSubmit} />
        {isLoading && <Loader />}
        {items.length > 0 && <ImageGallery items={items} />}
        {showLoadMore && (
          <Button onClick={this.onLoadMoreClick} loading={isLoading} />
        )}
      </>
    );
  }
}
