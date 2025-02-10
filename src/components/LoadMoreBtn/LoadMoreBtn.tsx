import css from './LoadMoreBtn.module.css';
import LoadMoreBtnProps from './types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
