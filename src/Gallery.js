import React, { useState, useEffect } from 'react';
import Tour from './Tour';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const removeTour = id => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading tours</h2>;
  }

  return (
    <div>
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery;
