import { useEffect } from "react"
import { useSkip, useUtils } from "src/hooks"

interface Props {
  children: React.ReactNode,
}

const NextArea = ({ children }: Props) => {
  const { useNav: navigate, nextStepOnClick } = useUtils()
  const { value: skip, setValue: setSkip } = useSkip(s => s)

  const handleButton = () => {
    if (skip) setSkip(false)
    nextStepOnClick({ navigate })
  }

  const onkeyup = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      handleButton()
    }
  }

  const onkeypress = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      setSkip(true)
    }
  }
  
  useEffect(() => {
    window.addEventListener('keyup', onkeyup)
    window.addEventListener('keypress', onkeypress)
    return () => {
      window.removeEventListener('keyup', onkeyup)
      window.removeEventListener('keypress', onkeypress)
    }
  }, [])

  return (
    <div onClick={handleButton} className="flex flex-col items-center justify-end h-full gap-2 -mt-2 pointer-events-auto">
      {children}
    </div>
  )
}

export { NextArea }
export default NextArea
