import { useGetBirdsQuery } from '../../services/api/api';
import { Page } from '../../components'

const HomePage = () => {
  const { data } = useGetBirdsQuery({ pageSize: 10});

  return (
    <Page>
      <h2 className="underline mb-4">Birds List</h2>
      {data ? (
        <>
          <p>Total Birds: {data.total}</p>
          <ul className="py-2">
            {
              data.entities.map((bird) => (
                <li key={bird.id}>{bird.name}</li>
              ))
            }
          </ul>
          <p>Showing page <span className="font-bold">{data.page}</span> of <span className="font-bold">{Math.ceil(data.total / data.pageSize)}</span></p>
        </>
      ) : (
        <p>Loading birds...</p>
      )}
    </Page>
  );
}

export default HomePage;
