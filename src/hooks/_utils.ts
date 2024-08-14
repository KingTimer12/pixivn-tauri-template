import { GameStepManager, getSaveJson, loadSaveJson } from "@drincs/pixi-vn"
import { StepLabelProps } from "@drincs/pixi-vn/dist/override"
import { NavigateOptions, To, useNavigate } from "react-router-dom"
import { useData } from "src/hooks/_data"
import { useNextStep } from "src/hooks/_step"

const useUtils = () => {
  const navigate = useNavigate()
  const setNextStepLoading = useNextStep((state) => state.setValue)
  const notifyReloadInterfaceDataEvent = useData((state) => state.updateEvents)

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
          notifyReloadInterfaceDataEvent()
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

  const interpolateString = (variables: { [key: string]: string | number }, text?: string): string => {
    return text?.replace(/{(\w+)}/g, (_, key) => {
      return key in variables ? variables[key].toString() : `{${key}}`;
    }) ?? "";
  }

  return {
    useNav,
    loadRefreshSave,
    addRefreshSave,
    nextStepOnClick,
    interpolateString
  }
}

export { useUtils }
export default useUtils
