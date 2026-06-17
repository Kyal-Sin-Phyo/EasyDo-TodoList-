import {
    ArrowDownUp,
    ChevronDown,
} from "lucide-react"

const SortFilter = ({ activeSort, openFilter }) => {
    return (
        <button onClick={openFilter} className="focus:border-[#6D5DFC] w-full min-w-30 h-11.25 flex justify-between items-center gap-0.5 rounded-md border border-[#1F293755] overflow-hidden">
            <span className="px-2.5">
                <ArrowDownUp size={20} />
            </span>
            <span>
                {activeSort}
            </span>
            <span className="px-2.5">
                <ChevronDown size={20} />
            </span>
        </button>
    )
}

export default SortFilter;