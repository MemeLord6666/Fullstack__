import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopPage from '../pages/ShopPage';
import HeroPage from '../pages/HeroPage';
import HomePage from '../pages/HomePage';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: "/",
            element: <HomePage/>,
            id: 1,
        },
        {
            link: "/hero",
            element: <HeroPage/>,
            id: 2,
        },
        {
            link: "/shop",
            element: <ShopPage/>,
            id: 3,
        },
    ]
    return (
       <>
       <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
       </Routes>
       </>
    );
};

export default MainRoutes;