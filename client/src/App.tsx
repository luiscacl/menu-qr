import React, { Suspense } from 'react';
import classes from './App.module.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';


// Lazy nos ayuda a que los componentes importados solo se rendericen cuando sea necesario, optimizando más la página web
// const Users = React.lazy(() => import('./user/pages/Users'));
// const NewPlace = React.lazy(() => import('./places/pages/NewPlace'));
// const MainNavigation = React.lazy(() => import('./shared/components/Navigation/MainNavigation'));
// const UpdatePlace = React.lazy(() => import('./places/pages/UpdatePlace'));
// const UserPlaces = React.lazy(() => import('./places/pages/UserPlaces'));

const App: React.FC = () => {
  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<Navigate to="/" replace />}/>
    </Routes>
  );
  

  /* Suspense es necesario en el router para que react.lazy funcione, este nos ayuda a solo cargar ciertos routes solo si es necesario
  cuando el usuario le da click a cierto link */
  return (
    <>
      <Suspense
        fallback={
          <div className="center">
            {/* <LoadingSpinner/> */}
          </div>
        }
      >
        <Router>
          {/* <MainNavigation/> */}
          <main>
            {/* <p className='text-9xl'>asndkansa</p> */}
              {routes}
          </main>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
