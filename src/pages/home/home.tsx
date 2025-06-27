import { use, useEffect, useState } from 'react';
import { useGetBirdsQuery } from '../../services/api/api';
import { Card, Page } from '../../components'

const HomePage = () => {
  const [ page, setPage ] = useState(1);
  const { data } = useGetBirdsQuery({ page, pageSize: 12 });

  return (
    <Page>
      <div className='grid gap-4'>
        {data ? (
          <>
            <p>Total Birds: <span className="font-bold">{data.total}</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {
                data.entities.map((bird) => (
                  <Card 
                    key={bird.id}
                    id={bird.id}
                    name={bird.name}
                    sciName={bird.sciName}
                    images={bird.images}
                  />
                ))
              }
            </div>
            <span className="flex items-center justify-center gap-4">
              <span
                className="text-sm text-emerald-900 cursor-pointer hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPage((prev) => Math.max(prev - 1, 1));
                }}
              >
                Prev
              </span>
              <span>
                Page <span className="font-bold">{data.page}</span> of <span className="font-bold">{Math.ceil(data.total / data.pageSize)}</span>
              </span>
              <span
                className="text-sm text-emerald-900 cursor-pointer hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPage((prev) => prev + 1);
                }}
              >
                Next
              </span>
            </span>
          </>
        ) : (
          <p>Loading birds...</p>
        )}
      </div>
    </Page>
  );
}

export default HomePage;
