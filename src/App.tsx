import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
