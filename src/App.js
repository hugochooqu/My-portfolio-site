import React from 'react';
import Navigation from './components/navigation';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import About from './components/about.js'



export default function App() {
  return (
    <div>

      
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      
    </div>
  
  )
}