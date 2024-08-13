import { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from "src/layout";

const Menu = lazy(async () => import("src/screens/menu"))
const Game = lazy(async () => import("src/screens/game"))

const router = createBrowserRouter([{
  path: "/",
  element: <PublicLayout />,
  children: [
    { index: true, element: <Menu /> },
    { path: "/game", element: <Game /> }
  ]
}])

export default router
