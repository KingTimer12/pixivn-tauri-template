import { useModal } from "src/hooks"

interface ModalProps {
  children: React.ReactNode,
  id: string
}

const Modal = ({ children, id }: ModalProps) => {
  const open = useModal((state) => state.open)

  {/*<aside className="flex flex-col justify-between items-center bg-gray-500">
                <div className="flex flex-col justify-center items-center gap-2">
                  <button onClick={() => setOpen(false)}>Save Game</button>
                  <button onClick={() => setOpen(false)}>Load Game</button>
                  <button onClick={() => setOpen(false)}>Preferences</button>
                  <button onClick={() => setOpen(false)}>About</button>
                </div>
                <button onClick={() => setOpen(false)}>Close</button>
              </aside>*/}
  return (
    <>
      {open === id && (
        <section className="flex justify-center items-center">
          <div className="fixed inset-0 backdrop-blur-md bg-black/80" />
          <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%]">
            {children}
          </div>
        </section>
      )}
    </>
  )
}

export { Modal }
export default Modal
