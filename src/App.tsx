import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css'
import { Wrapper } from './components/global/layout';
import { createGlobalStyle } from 'styled-components';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminHome from './components/page/admin/adminHome';
import AdminMembers from './components/page/admin/adminMembers';
import AdminPartners from './components/page/admin/adminPartners';
import AdminStores from './components/page/admin/adminStores';
const GlobalStyles = createGlobalStyle`
   *, :after, :before, ::after, ::before {box-sizing:border-box}
   * {margin:0; padding: 0; background-repeat: no-repeat; background-size: cover; background-position: center center;}
   body, html {height:100%; font-family: 'Pretendard'; font-weight: 400;}
   body {-webkit-font-smoothing:antialiased; line-height:1.5}
   canvas, img, picture, svg, video {display:block;max-width:100%}
   button, input, select, textarea {font:inherit; border: 0; background-color: transparent;}
   button{cursor: pointer;}
   h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word}
   #__next, #root {isolation:isolate}
   ul,ol{list-style: none;}
   a{text-decoration: none; color: inherit;}
   img{vertical-align: top; max-width: 100%;}
   textarea{resize: none;}
   select, option{appearance: none;}
`

const router = createBrowserRouter([
   {
      // path: "/",
      // element: <Layout/>,
      // children: [
      //     {
      //         path:"", 
      //         element: <Home />
      //     },
      // ]
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
