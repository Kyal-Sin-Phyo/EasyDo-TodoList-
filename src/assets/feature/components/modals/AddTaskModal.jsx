import { useTaskContext } from "../../context/TaskContextProvider";
import SelectCategoryModal from "./SelectCategoryModal";
import { useState } from "react";
import {
    X,
    Check,
    ChevronDown,
} from "lucide-react";

const priorities = [
    {
        label: "Low",
        key: "low",
        color: "#F59E0B",
        bgColor: "#F59E0B11",
    },
    {
        label: "Medium",
        key: "medium",
        color: "#22C55E",
        bgColor: "#22C55E11",
    },
    {
        label: "High",
        key: "high",
        color: "#EF4444",
        bgColor: "#EF444411",
    },
]

const AddTaskModal = () => {
    
    const [isOpenSelectCategory, setIsOpenSelectCategory] = useState(false);

    const [error, setError] = useState({
        inputTaskErr: false,
        inputCategoryErr: false
    })

    const {
        state,
        actions
    } = useTaskContext();

    const handleCancelBtn = () => {
        actions.cancelAddTaskBox()
        actions.closeAddTaskModal()
    }
    
    const handleAddTodoBtn = () => {

        const inputTaskErr = !state.inputTask.trim()
        const inputCategoryErr = !state.inputCategory;

        setError({
            inputTaskErr,
            inputCategoryErr,
        });

        if(inputTaskErr || inputCategoryErr) {
            setTimeout(() => {
                setError({
                    inputTaskErr: false,
                    inputCategoryErr: false,
                })
            }, 3000)
            return; 
        }

        if(state.isEdit) actions.saveEdit();
        else actions.addTask();
        
        actions.closeAddTaskModal();

    }

    return (
        <div className="absolute inset-0 grid place-items-center rounded-md bg-[#000a] z-99">

            <div className="relative flex flex-col justify-start items-center w-full h-full md:w-190 md:h-120 md:rounded-lg bg-[#F8F9FC] p-3.75">

                <div className="flex justify-between items-center md:flex-row-reverse w-full h-auto">
                    <button onClick={handleCancelBtn} className="outline-none w-8.75 h-8.75 grid place-items-center hover:text-[#EF4444]">
                        <X size={25} />
                    </button>
                    <h2 className="font-bold text-[23px]">Add New Todo</h2>
                    <button onClick={handleAddTodoBtn} className="md:hidden outline-none w-8.75 h-8.75 grid place-items-center hover:text-[#FFFFFF] hover:bg-[#6D5DFC] text-[#6D5DFC] rounded-full bg-transparent border border-[#6D5DFC]">
                        <Check size={25} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-3.75 mt-7.5 text-[16px] font-medium">
                    <div className="flex flex-col gap-3.75 w-full h-auto">
                        <div className="flex flex-col gap-1.25 w-full h-auto">
                            <span className="text-[14px] font-semibold">Title *</span>
                            <input
                                type="text"
                                value={state.inputTask}
                                onChange={e => actions.inputTask(e.target.value)}
                                className={`${error.inputTaskErr ? "border-[#fb2c36]" : "border-[#1F293755]"} w-full h-auto p-2.5 focus:border-[#6D5DFC] border  outline-none rounded-md`}
                                placeholder="Add To Task"
                            />
                        </div>
                        <div className="flex flex-col gap-1.25 w-full h-auto">
                            <span className="text-[14px] font-semibold">Description</span>
                            <textarea
                                value={state.inputDescription}
                                onChange={e => actions.inputDescription(e.target.value)}
                                className="w-full h-22.5 p-2.5 focus:border-[#6D5DFC] border border-[#1F293755] outline-none rounded-md resize-none"
                                placeholder="Add more details (Optional)"
                            >
                            </textarea>
                        </div>
                        <div className="flex flex-col gap-1.25 w-full h-auto">
                            <span className="text-[14px] font-semibold">Category *</span>
                            <button
                                onClick={() => setIsOpenSelectCategory(true)}
                                className={`${error.inputCategoryErr ? "border-[#fb2c36]" : "border-[#1F293755]"} w-full h-auto flex justify-between items-center p-2.5 focus:border-[#6D5DFC] border border-[#1F293755] outline-none rounded-md`}
                            >
                                <span>
                                    {state.inputCategory || "Select Category"}
                                </span>
                                <span>
                                    <ChevronDown size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.75 w-full h-auto">
                        <div className="flex flex-col gap-1.25 w-full h-auto">
                            <span className="text-[14px] font-semibold">Priority</span>
                            <div className="flex justify-between items-center gap-1.25 w-full h-auto">
                                {priorities.map((pri, idx) => {
                                    const bgColor = state.inputPriority === pri.key ? pri.color : pri.bgColor;
                                    const color = state.inputPriority === pri.key ? "#FFFFFF" : pri.color;
                                    return (
                                        <button
                                            key={`${pri.key}-${idx}`}
                                            onClick={() => actions.inputPriority(pri.key)}
                                            style={{ color: color, backgroundColor: bgColor, borderColor: pri.color }}
                                            className={` outline-none w-full h-auto border rounded-md py-2.5`}
                                        >
                                            {pri.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.25 w-full h-auto">
                            <span className="text-[14px] font-semibold">Due Date</span>
                            <input
                                type="datetime-local"
                                value={state.inputDeadline}
                                onChange={e => actions.inputDeadline(e.target.value)}
                                className="w-full h-auto p-2.5 focus:border-[#6D5DFC] border border-[#1F293755] outline-none rounded-md"
                                placeholder="Add To Task"
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex justify-end items-center gap-1.25 w-full h-auto mt-auto">
                    <button onClick={handleCancelBtn} className="outline-none w-45 h-auto border border-[#1F293755] hover:bg-[#1F293722] rounded-md text-[#1F2937] py-2.5">
                        Cancel
                    </button>
                    <button
                        onClick={() => handleAddTodoBtn()}
                        className="outline-none w-45 h-auto rounded-md bg-[#6D5DFC] hover:bg-[#5B4CF2] text-[#FFFFFF] py-2.5"
                    >
                        Add Task
                    </button>
                </div>

                {isOpenSelectCategory && (
                    <SelectCategoryModal
                        setIsOpenSelectCategory={setIsOpenSelectCategory}
                    />
                )}

            </div>
            
        </div>
    )
}

export default AddTaskModal;