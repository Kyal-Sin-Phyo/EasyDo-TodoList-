
const SidebarNavItem = ({ label, icon: Icon, count, isActive, setActiveTab }) => {

    return (
        <button onClick={() => setActiveTab()} className={`${isActive ? "bg-[#6D5DFC33] text-[#6D5DFC] font-medium" : "bg-transparent text-[#1F2937]"} shrink-0 flex justify-between items-center gap-2.5 w-full h-auto py-1.25 px-2.5 rounded-md cursor-pointer outline-none`}>
            <span className="shrink-0 flex justify-center items-center w-10 h-10 p-1 bg-[#1F293711] rounded-md">
                <Icon />
            </span>
            <div className="truncate flex justify-between items-center w-full">
                <span className="whitespace-nowrap">
                    {label}
                </span>
                <span className={`${isActive ? "border-[#6D5DFC]" : "border-[#1F2937]" } flex justify-center items-center rounded-md border  px-1.25`}>
                    {count}
                </span>
            </div>
        </button>
    )
}

export default SidebarNavItem;