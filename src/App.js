// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Header/Header';
import MovieList from './pages/MovieList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
      
    </div>
  );
}

export default App;