import PropTypes from 'prop-types';
import { ButtonEl, ButtonWrapper } from './Button.styled';
import { ClipLoader } from 'react-spinners';

export const Button = ({ onClick, loading }) => {
  return (
    <ButtonWrapper>
      <ButtonEl type="button" onClick={onClick}>
        <ClipLoader size={18} color="#fff" loading={loading} />
        <span>Load more</span>
      </ButtonEl>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
