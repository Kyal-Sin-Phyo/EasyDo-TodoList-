import {
    Plus
} from "lucide-react";

const AddButton = ({ onClick }) => {
    return (
        <button
            onClick={() => onClick()}
            className="flex justify-center items-center gap-1.25 w-auto h-10 text-[14px] font-medium py-1.35 px-2.5 rounded-md bg-[#6D5DFC] hover:bg-[#5B4CF2] text-[#FFFFFF] cursor-pointer"
        >
            <span>
                <Plus size="25px" />
            </span>
            <span className="hidden sm:block">Add Task</span>
        </button>
    )
}

export default AddButton;