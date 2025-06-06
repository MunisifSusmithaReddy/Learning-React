
import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/About';
import ContactUs from './components/Contact';
import ErrorPage from './components/ErrorPage';


const AppLayout = () => {
  console.log(<Body />)
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
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
        path: '*',
        element: <ErrorPage />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes }/>);



