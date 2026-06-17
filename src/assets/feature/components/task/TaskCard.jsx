

const TaskCard = ({ label, icon: Icon, count, borColor, bgColor }) => {

    return (
        <div style={{ borderColor: borColor, backgroundColor: bgColor }} className={`flex gap-2.5 border w-full h-auto p-1.25 sm:p-2.5 rounded-md overflow-hidden`}>
            <div style={{ backgroundColor: bgColor }} className={`shrink-0 flex justify-between items-center gap-2.5 w-auto h-12.5 p-2.5 rounded-md`}>
                <Icon size="25px" />
            </div>
            <div className="flex flex-col justify-center items-start w-full h-full">
                <span className="text-[14px] font-medium">{label}</span>
                <span className="text-[28px] font-bold">{count}</span>
            </div>
        </div>
    )
}

export default TaskCard;