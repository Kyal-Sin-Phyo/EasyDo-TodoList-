import {
    RotateCcw,
    Trash2,
} from "lucide-react"

const TrashList = ({ task, category, priority, endDate, status, restoreTask, deleteTask, }) => {

    return (
        <div className="flex justify-start items-start w-full min-h-20 h-auto gap-2.5 p-2.5 rounded-lg border border-[#1F293755]">
            
            <button
                onClick={restoreTask}
                className="w-7.5 h-7.5 shrink-0 grid place-content-center rounded-full cursor-pointer hover:text-[#22C55E]"
            >
                <RotateCcw size={20} />
            </button>
            <div className="w-full h-full flex flex-col justify-center item-start gap-2.5">
                <p className="font-semibold text-[16px]">{task}</p>
                <div className="flex divide-x-2 items-center gap-2.5 text-[14px] font-medium">
                    <span className=" text-[#8B5CF6] w-fit pr-2.5">{category}</span>
                    {priority && <span className="text-[#EF4444] pr-2.5">{priority}</span>}
                    {endDate && <span className="pr-2.5">{endDate}</span>}
                </div>
            </div>
            <button
                onClick={deleteTask}
                className="w-7.5 h-7.5 shrink-0 grid place-content-center cursor-pointer hover:text-[#FB2C36]"
            >
                <Trash2 size={20} />
            </button>

        </div>
    )
}

export default TrashList;