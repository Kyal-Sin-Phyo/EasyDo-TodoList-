
const TaskDetailBtn = ({ label, icon: Icon, color, bgColor, hoverColor, onClick }) => {

    return (
        <button
            onClick={onClick}
            style={{ "--btn-color": color, "--btn-bg": bgColor, "--btn-hover": hoverColor }} className="hover:bg-(--btn-hover) text-(--btn-color) bg-(--btn-bg) flex justify-center items-center gap-2.5 border w-full h-auto outline-none px-1.25 py-3.75 font-semibold rounded-md duration-300"
        >
            <Icon size={20} />
            {label}
        </button>
    )

}

export default TaskDetailBtn;