
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddNew from './components/student/AddNew';
import List from './components/student/List';
import View from './components/student/View';
import Alert from './components/alert/Alert';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Edit from './components/student/Edit';
import Home from './components/pages/Home';
import { useState } from 'react';

  

function App() {
  const [alert, setAlert]= useState("")
  const alertFunc=(mess,type)=>{
      setAlert({
          mess,
          type
      })
      setTimeout(()=>{
          setAlert(".")
       },1000)
  }

  return (
    
  <>
  <Alert message={alert}/>
  <div className='d-flex m-5 col-12'>
  <Router>
  <div className=' col-2 m-5'>
  {/* <div className='container w-50 '>
  <div className='container row w-100 mx-5'> */}
    
  <Link className="text-decoration-none  " to="/AddNew"><button className='col bg-button my-1 border-0 p-2 rounded'>Add NewRecord</button></Link>
  <Link className="text-decoration-none  " to="/list"><button className=' bg-button col border-0  p-2 rounded'>Student List</button></Link>
  <Link className="text-decoration-none  " to="/"><button className=' bg-button col my-1 border-0  p-2 rounded'>Home</button></Link>
    </div>
    {/* </div>
    </div> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<List Alertfunc={alertFunc}/>}/>
      <Route path='/AddNew' element={<AddNew Alertfunc={alertFunc}/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/edit/:id' element={<Edit Alertfunc={alertFunc}/>}/>

      
    </Routes>
  </Router>
  </div>
  {/* </div> */}
  
  
  </>
  );
}

export default App;
