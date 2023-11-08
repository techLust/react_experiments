import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Route, Routes } from 'react-router-dom';
import {
  Shapes,
  BootstrapExp,
  ReactBootstrapExp
} from './components'

function App() {
  return (
    // <Provider store={store}> 
    // <div className="App">
    <Routes>
      <Route path='/three.js/experiment' element={<Shapes />} />
      <Route path='/bootstrap/experiment' element={<BootstrapExp />} />
      <Route path='/react-bootstrap/experiment' element={<ReactBootstrapExp />} />
    </Routes>
    // </div>
    // </Provider>
  );
}

export default App;
