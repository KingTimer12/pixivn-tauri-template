import { useEffect } from "react"
import { useData, useHideInterface, useUtils } from "src/hooks"

const EventInterceptor = () => {
  const notifyLoadEvent = useData(s => s.updateEvents)
  const { value: hideInterface, setValue: setHideInterface } = useHideInterface(s => s)
  const { useNav: navigate, loadRefreshSave, addRefreshSave } = useUtils()

  const onpopstate = () => {
    window.history.forward()
  }

  const onkeydown = (event: KeyboardEvent) => {
    if (event.code == 'Enter' || event.code == 'Space') {
      if (hideInterface) setHideInterface(false)
      return
    }
    if (event.code == 'KeyV' && event.ctrlKey) {
      setHideInterface(!hideInterface)
    }
  }

  useEffect(() => {
    loadRefreshSave(navigate).then(notifyLoadEvent)
    window.addEventListener('beforeunload', addRefreshSave)
    window.addEventListener('popstate', onpopstate)
    window.addEventListener('keydown', onkeydown)
    return () => {
      window.removeEventListener('beforeunload', addRefreshSave)
      window.removeEventListener('popstate', onpopstate)
      window.removeEventListener('keydown', onkeydown)
    }
  }, [])
  
  return null
}

export { EventInterceptor }
export default EventInterceptor
