import toast from 'react-hot-toast';

export const success = (totalHits, page) => {
  if (page === 1) {
    toast.success(`We found ${totalHits} images.`);
  }
};

export const error = () => {
  toast.error('Ooops... Something went wrong. Try reload page!');
};

export const info = (totalHits, page) => {
  const totalPages = totalHits / 12;
  let message = null;
  if (totalPages <= 1 || page > totalPages) {
    message = "We're sorry, but you've reached the end of search results.";
  }
  if (!totalHits) {
    message =
      'Sorry, there are no images matching your search query. Please try again.';
  }
  if (message) {
    toast(message, {
      icon: '☹',
    });
  }
};
