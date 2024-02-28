import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';


// export default function App() {
//   return (
//       <main>This app is using the dark mode</main>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
