import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css'
import { Wrapper } from './components/global/layout';
import { createGlobalStyle } from 'styled-components';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminHome from './page/admin/adminHome';
import AdminMembers from './components/admin/adminMembers';
import AdminPartners from './components/admin/adminPartners';
import AdminStores from './components/admin/adminStores';
import Layout from './page/default';
import Home from './page/home/home';
import Login from './routes/login';
import Partners from './routes/partners/partners';
import PartnersHome from './routes/partners/partnersHome';
import PtnJoin from './routes/partners/ptnJoin';
import Signup from './routes/join';
import ProtectedRoute from './routes/protectRoute';
import Mypage from './routes/mypage/mypage';
import Mypagehome from './page/users/mypagehome';
import Nearby from './page/nearby/nearby';
const GlobalStyles = createGlobalStyle`
   *, :after, :before, ::after, ::before {box-sizing:border-box}
   * {margin:0; padding: 0; background-repeat: no-repeat; background-size: cover; background-position: center center;}
   body, html {height:100%; font-family: 'Pretendard'; font-weight: 400;}
   body {-webkit-font-smoothing:antialiased; line-height:1.5}
   canvas, img, picture, svg, video {display:block;max-width:100%}
   button, input, select, textarea {font:inherit; border: 0; background-color: transparent;}
   button{cursor: pointer; display: block;}
   h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word; margin: 0; padding: 0;}
   #__next, #root {isolation:isolate}
   ul,ol{list-style: none;}
   a{text-decoration: none; color: inherit;}
   img{vertical-align: top; max-width: 100%;}
   textarea{resize: none;}
   select, option{appearance: none;}
`

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout/>,
      children: [
         {
            path: "/", 
            element: <Home />
         },
         {
            path: "/nearby",
            element: <Nearby/>
         }
      ]
  },
  {
   path: "/login",
   element: <Login />
   },
   {
      path: "/signup",
      element: <Signup />
   },
  {
      path: "/admin",
      // element: <AdminProtect><AdminHome /></AdminProtect>,
      element: <AdminHome />,
      children: [
         {
              path: "/admin/members",
              element: <AdminMembers />
         },
         {
            path: "/admin/partners",
            element: <AdminPartners />
         },
         {
            path: "/admin/stores",
            element: <AdminStores />
         },
      ]
   },
   {
      path: "/partners",
      element: <Partners />,
      children : [
         {
            path : "/partners",
            element: <PartnersHome />
         }
      ]
   },
   {
      path: "/partnersJoin",
      element: <PtnJoin />
   },
   {
      path: "/mypage",
      element: <ProtectedRoute><Mypage /></ProtectedRoute>,
      children : [
         {
            path : "/mypage",
            // element: <ProtectedRoute><Mypagehome /></ProtectedRoute>,
            element : <Mypagehome />
         }

      ]
   }
   
]);

function App() {
   return (
      <Wrapper>
          <GlobalStyles />
          <RouterProvider router={router}/>
      </Wrapper>
   )
}

export default App
