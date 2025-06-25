import { useGetBirdsQuery } from '../../services/api/api';
import { Bird } from '../../types/bird.types'

const HomePage = () => {
  const { data } = useGetBirdsQuery();

  const renderBirds = (data: Bird[] ) => {
    return data.map((bird) => (
      <li key={bird.id}>{bird.name}</li>
    ));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <div>
        <h2>Birds List</h2>
        {data ? (
          <ul>
            {renderBirds(data.entities)}
          </ul>
        ) : (
          <p>Loading birds...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
