import { addImage, clearAllGameDatas, GameStepManager, GameWindowManager } from "@drincs/pixi-vn"
import { motion } from 'framer-motion'
import { useEffect } from "react"
import { useData, useHideInterface, useModal, useUtils } from "src/hooks"
import { startLabel } from "src/scenes"

const Menu = () => {
  const { open, setOpen } = useModal((state) => state)
  const setHideInterface = useHideInterface((state) => state.setValue)
  const { dataEvent, setDataEvent: notifyReloadInterfaceDataEvent } = useData((state) => state)
  const { useNav } = useUtils()

  useEffect(() => {
    setHideInterface(false)
    clearAllGameDatas()
    let bg = addImage("background_main_menu", "https://andreannaking.com/wp-content/uploads/2021/12/Download-Beautiful-Nature-Landscape-Hd-Wallpaper-Full-HD-Wallpapers.jpg")
    bg.zIndex = 1;
    bg.load()
  })

  return (
    <section className="flex justify-center items-center h-full">
      <div data-settings={open != null} className="flex flex-col border-2 gap-4 p-5 bg-black *:data-[settings=true]:pointer-events-none">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => {
            GameWindowManager.removeCanvasElements()
            useNav("/game")
            GameStepManager.callLabel(startLabel, {
              navigate: useNav
            }).then(() => {
              notifyReloadInterfaceDataEvent(dataEvent + 1)
            })
          }}>
          Play
        </motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => console.log("click")}>
          Load
        </motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setOpen("settings")}>
          Settings
        </motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => console.log("click")}>
          Exit
        </motion.button>
      </div>
    </section>
  )
}

export default Menu
