import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import About from './About/About'




export default function App() {
  let Routes = createBrowserRouter([
     {path:"" , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"contact" , element:<Contact/>},

     ]}
   ])
   return (
     <div>
      <RouterProvider router={Routes}/>
     </div>
   )
 }