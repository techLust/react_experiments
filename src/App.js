import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { calculateTotals } from './slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormValidation from './components/FormValidation/FormValidation';
import { Chat } from './components/Chat/Chat';
import Carousel from './components/Carousel/Carousel';
import JsonApiCall from './components/ApiCall/JsonApiCall';
import ExportToCSV from './pages/ExportCSV';
import HookExp from './pages/HookExp';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import Hoc from './pages/Hoc/Hoc';
import ClassPage from './pages/ClassPage/ClassPage';
// import * as firebase from 'firebase'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9MKASj0oGbefSwsrxOjZ5zE75NQ2DHyU",
  authDomain: "analytics-exp-ad40b.firebaseapp.com",
  projectId: "analytics-exp-ad40b",
  storageBucket: "analytics-exp-ad40b.appspot.com",
  messagingSenderId: "61891576743",
  appId: "1:61891576743:web:66c184a7ff5b0f41392c82",
  measurementId: "G-BPVSKHM4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig)
// var analytics = firebase.analytics()

function App() {
  const { cartItems } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    // logEvent(analytics, { parameter_name: '1' });
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormValidation />} />
          <Route path='cart' element={<Cart />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/carousel' element={<Carousel />} />
          <Route path='/custom/hook' element={<JsonApiCall />} />
          <Route path='/export/csv' element={<ExportToCSV />} />
          <Route path='/hook' element={<HookExp />} />
          <Route path='/hoc' element={<Hoc />} />
          <Route path='/class' element={<ClassPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
