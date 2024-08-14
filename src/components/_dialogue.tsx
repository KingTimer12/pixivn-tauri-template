import { useDialogue } from "src/hooks"

const Dialogue = () => {
  const { character, text } = useDialogue(s => s.data)

  return (
    <div className="flex bg-white w-[86%] h-[22%] rounded-sm p-2 gap-4">
      <img src={character?.icon} className="rounded-full w-[9.4rem] h-[9.4rem]" />
      <div className="flex flex-col gap-2">
        <p className={`font-bold text-lg bg-[${character?.color}]`}>{character?.name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export { Dialogue }
export default Dialogue
