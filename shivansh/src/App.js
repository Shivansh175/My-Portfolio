// import logo from './logo.svg';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';



// export default function App() {
//   return (
//       <main>This app is using the dark mode</main>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
