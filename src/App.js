import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Shapes from './components/Shapes';

function App() {
  return (
    // <Provider store={store}> 
    <div className="App">
      <Shapes />
    </div>
    // </Provider>
  );
}

export default App;
