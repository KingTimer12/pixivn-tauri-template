import { Outlet } from "react-router-dom"
import { Modal, Settings } from "src/components"
import { EventInterceptor } from "src/interceptors"

const PublicLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <main className="container h-screen mx-auto">
        <Modal id="settings"><Settings /></Modal>
        <EventInterceptor />
        <Outlet />
      </main>
    </div>
  )
}

export { PublicLayout }
export default PublicLayout
