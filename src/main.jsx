import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import StarRating from './StarRaring';

// function Test() {
//   const [movieReting, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieReting} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okey', 'Good', 'Amazing']}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
