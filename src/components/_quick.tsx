interface QuickActionProps {
  actions: {
    label: string;
    onClick: () => void;
  }[]
}

const QuickActions = ({ actions }: QuickActionProps) => {
  return (
    <div className="flex gap-8">
      {actions.map((action, index) => (
        <button className="!bg-transparent font-bold text-sm text-white !w-auto !h-5 hover:text-blue-400" key={index} onClick={action.onClick}>{action.label}</button>
      ))}
    </div>
  );
};

export { QuickActions }
export default QuickActions;
