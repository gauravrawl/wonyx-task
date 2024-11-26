import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import { lazy, Suspense } from 'react';

//Lazy loading to import component when needed.
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const Leads = lazy(() => import("./pages/Leads"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading......</p>}>
      <Router>
        <Routes>
        <Route  element={<DashboardLayout/>}>
            <Route index path='/' element={<DashboardHome/>}/>
            <Route path='/leads' element={<Leads/>}/>
          </Route> 
        </Routes>      
        </Router>
    </Suspense>
  );
};

export default App;
