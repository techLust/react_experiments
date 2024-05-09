import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { calculateTotals } from './slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormValidation from './components/FormValidation/FormValidation';
import { Chat } from './components/Chat/Chat';
import Carousel from './components/Carousel/Carousel';
import ExportToCSV from './pages/ExportCSV';
import HookExp from './pages/HookExp';
import Hoc from './pages/Hoc/Hoc';
import ClassPage from './pages/ClassPage/ClassPage';
import Login from './pages/Login/Login';
import FirebaseCrud from './pages/FirebaseCrud';
import Exp from './components/ReactExp/Exp';
import AuthGuard from './guard/AuthGuard';
import StorageExp from './components/StorageExp';
import TestCustomReducer from './components/TestCustomReducer';

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<FormValidation />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/custom/hook" element={<HookExp />} />
          <Route path="/export/csv" element={<ExportToCSV />} />
          <Route path="/hook" element={<HookExp />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/class" element={<ClassPage />} />
          <Route path="/firebase" element={<FirebaseCrud />} />
          <Route path="/storage" element={<StorageExp />} />
          <Route path="/exp" element={<AuthGuard component={Exp} />} />
          <Route path='/testred' element={<TestCustomReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
