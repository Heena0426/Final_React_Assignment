
import './App.css';
import Create from './components/Create';

import Read from './components/Read';
import Edit from './components/Edit';
import Login from './components/Login';

import { RouterProvider,redirect } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom/dist';
import { AuthProvider } from './AuthContext';


const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Read',
    loader:()=>{
      let isAuthenticated= localStorage.getItem('authentication')
      if(isAuthenticated!=='done'){
        return redirect('/')
      }
      return null
    },
    element: <Read />
  },
  {
        path: 'Edit',
        loader:()=>{
          let isAuthenticated= localStorage.getItem('authentication')
          if(isAuthenticated!=='done'){
            return redirect('/')
          }
          return null
        },
        element: <Edit />,
  },
  {
    path: 'Create',
    loader:()=>{
      let isAuthenticated= localStorage.getItem('authentication')
      if(isAuthenticated!=='done'){
        return redirect('/')
      }
      return null
    },
    element: <Create />,
}

    


])
function App() {
  return (
    
    <div className="container">
      <AuthProvider>
      <RouterProvider router={router} />
      {/* <Login/> */}
      {/* <Routes>
        
         <ProtectedRoute path='/' element={<Login/>}></ProtectedRoute>
         <ProtectedRoute path='/read' element={<Read/>}></ProtectedRoute>
         <ProtectedRoute path='/create' element={<Create/>}></ProtectedRoute>
         <ProtectedRoute path='/edit' element={<Edit/>}></ProtectedRoute>
      </Routes>  */}
      
      
      </AuthProvider>

      
    </div>
  );
}

export default App;

