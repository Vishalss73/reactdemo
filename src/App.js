import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import Header from './components/Header';
const App = () => {
  return (
    <>
    <Header />
   <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      </>
  )
  }
export default App;