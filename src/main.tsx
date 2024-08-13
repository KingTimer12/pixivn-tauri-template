import { GameStepManager, GameWindowManager } from '@drincs/pixi-vn'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from 'src/routes'
import 'src/styles/global.css'

const body = document.body
if (!body) {
  throw new Error('body element not found')
}

GameWindowManager.initialize(body, 1920, 1080, {
  backgroundColor: '#303030'
}).then(() => {
  const root = document.getElementById('root')
  if (!root) {
    throw new Error('root element not found')
  }

  GameWindowManager.initializeHTMLLayout(root)
  const reactRoot = createRoot(GameWindowManager.htmlLayout)

  reactRoot.render(
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
})

GameStepManager.gameEnd = async (props) => {
    props.navigate("/")
}