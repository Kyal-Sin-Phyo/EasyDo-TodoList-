import {
    Check,
    EllipsisVertical
} from "lucide-react"

const TaskList = ({ task, category, priority, endDate, status, check, openEditMenu }) => {

    return (
        <div className="flex justify-start items-start w-full min-h-20 h-auto gap-2.5 p-2.5 rounded-lg border border-[#1F293755]">
            
            <button
                onClick={check}
                className={`${status ? "bg-[#6D5DFC] text-[#FFFFFF]" : "border border-[#1F2937]"} w-6.25 h-6.25 shrink-0 flex justify-center items-center  p-1.25  rounded-full cursor-pointer`}
            >
                {status && <Check />}
            </button>
            <div className="w-full h-full flex flex-col justify-center item-start gap-2.5">
                <p onClick={check} className={`${status ? "line-through text-[#9CA3AF]" : ""} font-semibold text-[16px]`}>{task}</p>
                <div className="flex divide-x-2 items-center gap-2.5 text-[14px] font-medium">
                    <span className=" text-[#8B5CF6] w-fit pr-2.5">{category}</span>
                    {priority && <span className="text-[#EF4444] pr-2.5">{priority}</span>}
                    {endDate && <span className="pr-2.5">{endDate}</span>}
                </div>
            </div>
            <button
                onClick={openEditMenu}
                className={`w-7.5 h-7.5 shrink-0 flex justify-center items-center cursor-pointer`}
            >
                <EllipsisVertical />
            </button>

        </div>
    )
}

export default TaskList;