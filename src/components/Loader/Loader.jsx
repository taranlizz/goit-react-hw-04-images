import { LoaderWrapper } from './Loader.styled';
import { BeatLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <BeatLoader color="#9786F6" size={25} />
    </LoaderWrapper>
  );
};
