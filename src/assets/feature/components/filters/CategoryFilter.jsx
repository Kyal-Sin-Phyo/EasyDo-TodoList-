import {
    ChartBarStacked,
    ChevronDown,
} from "lucide-react"

const CategoryFilter = ({ activeCategory, openFilter }) => {
    return (
        <button onClick={openFilter} className="focus:border-[#6D5DFC] w-full h-11.25 min-w-30 flex justify-between items-center gap-0.5 rounded-md border border-[#1F293755] overflow-hidden">
            <span className="px-2.5">
                <ChartBarStacked size={20} />
            </span>
            <span>
                {activeCategory}
            </span>
            <span className="px-2.5">
                <ChevronDown size={20} />
            </span>
        </button>
    )
}

export default CategoryFilter;