import {
    SlidersHorizontal,
} from "lucide-react"

const FilterBtn = () => {
    return (
        <button className="flex justify-center items-center gap-1.25 w-auto h-11.25 text-[14px] font-medium py-1.35 px-2.5 rounded-md hover:bg-[#9CA3AF22] border border-[#1F293755] text-[#1F2937] cursor-pointer">
            <span>
                <SlidersHorizontal size="20px" />
            </span>
        </button>
    )
}

export default FilterBtn;