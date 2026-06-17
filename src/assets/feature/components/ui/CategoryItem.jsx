

const CategoryItem = ({ label, icon: Icon, count, color, bgColor, sidebarOpen, isActive, categoryFn }) => {

    return (
        <button onClick={categoryFn} className={`${isActive ? "bg-[#6D5DFC33] text-[#6D5DFC] font-medium" : "bg-transparent text-[#1F2937]"} shrink-0 flex justify-between items-center gap-2.5 w-full h-auto py-1.25 px-2.5 rounded-md cursor-pointer outline-none`}>
            <span style={{ backgroundColor: bgColor }} className={`shrink-0 flex justify-center items-center w-10 h-10 p-1 rounded-md`}>
                <Icon color={color} />
            </span>
            <div className={`${sidebarOpen ? "flex" : "flex md:hidden"} truncate justify-between items-center w-full`}>
                <span className="whitespace-nowrap">
                    {label}
                </span>
                <span className="flex justify-center items-center rounded-md border border-[#1F2937] px-1.25">
                    {count}
                </span>
            </div>
        </button>
    )
}

export default CategoryItem;