import './App.css';  //rcc
import React, { useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = () => {
  const [progress , setProgress ] = useState (0)
  
  const pageSize=9;
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='red'
          progress={progress}
        />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

