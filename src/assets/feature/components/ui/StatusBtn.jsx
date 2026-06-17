
const StatusBtn = ({ label, isActive, setActiveTab }) => {
    return (
        <button onClick={() => setActiveTab()} className={`${isActive ? "text-[#6D5DFC] bg-[#6D5DFC33]" : "text-[#1F2937] bg-transparent"} cursor-pointer w-30 h-auto rounded-md py-2.5 px-1.25 text-[14px] font-medium`}>
            {label}
        </button>
    )
}

export default StatusBtn;