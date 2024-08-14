import { GameStepManager, getSaveJson, loadSaveJson } from "@drincs/pixi-vn"
import { StepLabelProps } from "@drincs/pixi-vn/dist/override"
import { NavigateOptions, To, useNavigate } from "react-router-dom"
import { useNextStep } from "src/hooks/_step"
import { useData } from "src/hooks/_data"

const useUtils = () => {
  const navigate = useNavigate()
  const setNextStepLoading = useNextStep((state) => state.setValue)
  const { dataEvent, setDataEvent: notifyReloadInterfaceDataEvent } = useData((state) => state)

  const useNav = (to: To | number, options?: NavigateOptions) => {
    if (typeof to === "number") {
      navigate(to)
    } else {
      navigate(to, options)
    }
    window.history.pushState(null, window.location.href, window.location.href)
  }

  const loadRefreshSave = async (navigate: (path: string) => void) => {
    const jsonString = localStorage.getItem("refreshSave")
    if (jsonString) {
      navigate("/loading")
      return loadSaveJson(jsonString, navigate)
        .then(() => {
          localStorage.removeItem("refreshSave")
        })
        .catch(() => {
          navigate("/")
        })
    }
    else {
      navigate("/")
    }
  }

  const addRefreshSave = () => {
    const jsonString = getSaveJson()
    if (jsonString) {
      localStorage.setItem("refreshSave", jsonString)
    }
  }

  const nextStepOnClick = async (props: StepLabelProps) => {
    setNextStepLoading(true)
    try {
      if (!GameStepManager.canGoNext) {
        setNextStepLoading(false)
        return;
      }
      GameStepManager.goNext(props)
        .then(() => {
          notifyReloadInterfaceDataEvent(dataEvent + 1)
          setNextStepLoading(false)
        })
        .catch((err) => {
          setNextStepLoading(false)
          console.error(err)
        })
      return;
    } catch (err) {
      setNextStepLoading(false)
      console.error(err)
    }
  }

  return {
    useNav,
    loadRefreshSave,
    addRefreshSave,
    nextStepOnClick
  }
}

export { useUtils }
export default useUtils
