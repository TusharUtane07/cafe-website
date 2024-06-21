import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Menu from './pages/Menu.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import BookTable from './pages/BookTable.tsx'
import Gallery from './pages/Gallery.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "book-table",
        element: <BookTable/>
      },
      {
        path: "gallery",
        element: <Gallery/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);