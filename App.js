import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';



function App() {
 
  return (
   <>
<Navbar/>
<div className="container my-3">
<TextForm heading="Text to Analyze"/>
</div>

  </>
    
  );
};

export default App;
