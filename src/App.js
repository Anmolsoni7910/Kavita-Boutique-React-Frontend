import logo from './logo.svg';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminRoutes from './Routers/AdminRoutes';
import AdminPanel from './Admin/AdminPanel';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        {/* <Route path="/admin/*" element={<AdminPannel />} /> */}
        <Route path='/admin/*' element={<AdminRoutes/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
