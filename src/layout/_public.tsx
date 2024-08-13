import { Outlet } from "react-router-dom"
import { Settings, Modal } from "src/components"

const PublicLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <main className="container h-screen mx-auto">
        <Modal id="settings"><Settings /></Modal>
        <Outlet />
      </main>
    </div>
  )
}

export { PublicLayout }
export default PublicLayout
