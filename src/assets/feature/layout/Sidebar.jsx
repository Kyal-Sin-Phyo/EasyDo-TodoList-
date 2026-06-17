// Sidebar.jsx
import MenuBtn from '../components/ui/MenuBtn';
import SidebarNavItem from '../components/ui/SidebarNavItem';
import { sidebarItems, categories } from '../data/initialData';
import CategoryItem from "../components/ui/CategoryItem";
import SidebarMsg from '../components/ui/SidebarMsg';
import { useTaskContext } from '../context/TaskContextProvider';
import {
    PanelLeft,
    X,
    Plus,
    ChartBarStacked,
    MoonStar,
} from 'lucide-react';


const Slidebar = () => {

    const {
        state,
        stats,
        trashCount,
        actions,
    } = useTaskContext();

    return (
        <aside className={`group ${state.sidebarOpen ? "left-0" : "-left-full"} absolute md:relative md:left-0 w-full h-full p-2.5 py-3.75 text-[14px] font-medium border-r border-[#1F2937] scrollbar bg-[#F8F9FC] z-99 duration-300 overflow-y-auto overflow-x-hidden`}>

            {/* Title */}
            <div className="flex justify-between items-center w-full h-auto mb-10 px-2.5">
                <div className={`${state.sidebarOpen ? "" : "block group-hover:hidden"} flex gap-2.5`}>
                    <span className='w-10 h-10 p-1 overflow-hidden'>
                        <img src="/logo.png" alt="Logo" className='w-full h-full aspect-square object-contain' />
                    </span>
                    <h1 className={`${state.sidebarOpen ? "block" : "block md:hidden"} text-[23px] font-bold`}>Easy<span className='text-[#6D5DFC]'>Do</span></h1>
                </div>
                <button
                    onClick={() => actions.toggleSidebar(!state.sidebarOpen)}
                    className={`${state.sidebarOpen ? "md:flex hidden" : " hidden group-hover:flex"} outline-none justify-center items-center cursor-w-resize w-10 h-10 rounded-md hover:bg-[#1F293716] duration-300`}
                >
                    <PanelLeft />
                </button>
                <button
                    onClick={() => actions.toggleSidebar(false)}
                    className={`flex md:hidden outline-none justify-center items-center cursor-w-resize w-10 h-10 rounded-md hover:bg-[#1F293716] duration-300`}
                >
                    <X />
                </button>
            </div>
            {/* Nav Items */}
            <div className="flex flex-col justify-start items-center gap-2.5 w-full h-auto">
                {sidebarItems.map((item, idx) => (
                    <SidebarNavItem
                        key={`${item.key}-${idx}`}
                        label={item.label}
                        icon={item.icon}
                        count={item.key === "trash" ? trashCount : stats[item.key]}
                        isActive={state.activeTab === item.key}
                        setActiveTab={() => {
                            actions.setActiveTab(item.key)
                            actions.toggleSidebar(false);
                        }}
                    />
                ))}
            </div>
            <div className="w-full h-px bg-[#9CA3AF55] my-10"></div>
            {/* Categories Item */}
            <div className="flex flex-col justify-start items-center gap-2.5 w-full h-auto mb-10">
                <div className="flex justify-between items-center w-full h-auto mb-5 px-2.5">
                    <h2 className={`${state.sidebarOpen ? "block" : "block md:hidden"} text-[16px] font-semibold`}>Categories</h2>
                    <span 
                        className='flex justify-center items-center w-10 h-10 rounded-md'
                    >
                        <ChartBarStacked />
                    </span>
                </div>
                {categories.map((cat, idx) => (
                    <CategoryItem
                        key={`${cat.key}-${idx}`}
                        label={cat.label}
                        icon={cat.icon}
                        count={stats.categories[cat.key]}
                        color={cat.color}
                        bgColor={cat.bgColor}
                        sidebarOpen={state.sidebarOpen}
                        isActive={state.category === cat.key}
                        categoryFn={() => {
                            actions.filterCategory(cat.key);
                            actions.toggleSidebar(false);
                        }}
                    />
                ))}
            </div>
            {state.sidebarOpen && 
                <SidebarMsg
                    text="Stay Productive!"
                    des="You've got this 💪"
                    icon={MoonStar}
                />
            }

        </aside>
    )
}

export default Slidebar;