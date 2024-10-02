import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/Estado/SemEstado";
import { ComEstado } from "./pages/Estado/ComEstado";
import { CampoTexto } from "./pages/Estado/CampoTexto";
import { Contador } from "./pages/Estado/Contador";
import { ComunicacaoIndireta } from "./pages/Comunicacao/ComunicacaoIndireta";
import { ComunicacaoDireta } from "./pages/Comunicacao/comunicacaoDireta";
;


// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado/>} />
      <Route path="comEstado" element={<ComEstado/>} />
      <Route path="campoTexto" element={<CampoTexto/>} />
      <Route path="contador" element={<Contador/>} />
      <Route path="comunicacao-direta" element={<ComunicacaoDireta/>}/>
      <Route path="comunicacao-indireta" element={<ComunicacaoIndireta/>}/>
      
      

      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
