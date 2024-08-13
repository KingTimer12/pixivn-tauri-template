import { useModal } from "src/hooks"

const Settings = () => {
  const { close } = useModal(f => f)

  return (
    <div className="flex p-5 gap-10 h-full">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-center items-center *:py-2 bg-white rounded-md shadow-lg">
          <h1>Settings</h1>
        </div>
        <form className="flex flex-col justify-between p-2 bg-white h-full rounded-md">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="music">Display</label>
              <select name="select">
                <option value="value1">Window</option>
                <option value="value2" selected>Fullscreen</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="speed">Text Speed</label>
              <input type="range" id="speed" name="speed" min="0" max="100" />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="foward">Auto-Forward Time</label>
              <input type="range" id="foward" name="foward" min="0" max="100" />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="music">Music</label>
              <input type="range" id="music" name="music" min="0" max="100" />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="sound">Sound</label>
              <input type="range" id="sound" name="sound" min="0" max="100" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={close}>
              Back
            </button>
            <div className="flex gap-2">
              <button onClick={close}>
                Reset
              </button>
              <button onClick={close}>
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Settings }
export default Settings
