
import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/About';
import ContactUs from './components/Contact';
import ErrorPage from './components/ErrorPage';
import { Outlet } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/** Outlet is used to render the child components of the current route */}
        </div>
    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantMenu />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);



