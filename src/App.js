import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import UsersRoutes from './routes/UsersRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/*' element={<AdminRoutes /> } />
        <Route path='/*' element={<UsersRoutes />} />
      </Routes>
    </>
  );
}

export default App;
