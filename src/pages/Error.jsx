import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='Not Found' />
          <h3>Uh-oh!</h3>
          <p>
            It seems like you've stumbled upon the mystical land of the 404
            page. Unfortunately, the page you're looking for seems to have gone
            on its own little adventure and couldn't be found.
          </p>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong!</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
