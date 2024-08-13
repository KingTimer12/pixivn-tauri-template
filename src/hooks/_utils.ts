import { NavigateOptions, To, useNavigate } from "react-router-dom"

const useUtils = () => {
  const navigate = useNavigate()
  
  const useNav = (to: To | number, options?: NavigateOptions) => {
    if (typeof to === "number") {
      navigate(to)
    } else {
      navigate(to, options)
    }
    window.history.pushState(null, window.location.href, window.location.href)
  }
  
  return {
    useNav
  }
}

export { useUtils }
export default useUtils