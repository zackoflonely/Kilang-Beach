import React, { useEffect, useState } from 'react';

function Ratings() {
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const input = 'Pantai Kilang Mandiri';
    const apiKey = 'AIzaSyAtqlfVvl01NFqTVtc1p142gVc1CLF4Nho';

    fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=place_id&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const placeId = data.candidates[0].place_id;

        fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            if (data.result) {
              setPlace(data.result);
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (!place) {
    return <div>Loading...</div>;
  }

  const { name, rating, reviews } = place;

  return (
    <div>
      <h2>{name}</h2>
      <p>Rating: {rating}</p>
      <h3>Reviews:</h3>
      {reviews.map(review => (
        <div key={review.author_name}>
          <p>Author: {review.author_name}</p>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Ratings;
