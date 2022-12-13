import HashLoader from 'react-spinners/HashLoader';


import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <HashLoader color="#fff" size={125} />
    </LoaderWrap>
  );
};

export default Loader;
