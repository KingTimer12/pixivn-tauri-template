interface DialogueProps {
  avatarURL: string,
  characterName: string,
  dialogue: string,
}

const Dialogue = ({ avatarURL, characterName, dialogue }: DialogueProps) => {
  return (
    <div className="flex bg-white w-[86%] h-[22%] rounded-sm p-2 gap-4">
      <img src={avatarURL} className="rounded-full" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">{characterName}</p>
        <p>{dialogue}</p>
      </div>
    </div>
  )
}

export { Dialogue }
export default Dialogue
