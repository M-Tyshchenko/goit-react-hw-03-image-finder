import { LoadMoreButton } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ loadMoreHandler }) => {
  return (
    <div>
      <LoadMoreButton onClick={loadMoreHandler} type="button">
        Load more
      </LoadMoreButton>
    </div>
  );
};
