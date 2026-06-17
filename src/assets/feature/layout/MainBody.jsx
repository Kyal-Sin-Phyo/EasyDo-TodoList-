// MainBody.jsx
import MenuBtn from "../components/ui/MenuBtn";
import AddButton from "../components/ui/AddButton";
import TaskCard from "../components/task/TaskCard";
import SearchBar from "../components/filters/SearchBar";
import CategoryFilter from "../components/filters/CategoryFilter";
import SortFilter from "../components/filters/SortFilter";
import StatusBtn from "../components/ui/StatusBtn";
import TaskList from "../components/task/TaskList";
import TrashList from "../components/task/TrashList";

import CategoryFilterModal from "../components/modals/CategoryFilterModal";
import SortFilterModal from "../components/modals/SortFilterModal";
import { categories } from "../data/initialData";

import { useTaskContext } from "../context/TaskContextProvider";
import { sidebarItems } from "../data/initialData";
import formatDate from "../utils/formatDate";
import { useState } from "react";


const MainBody = () => {

    const {
        state,
        stats,
        filterProcessTasks,
        actions,
    } = useTaskContext();

    const [isOpenCatFilter, setIsOpenCatFilter] = useState(false)
    const [isOpenSortFilter, setIsOpenSortFilter] = useState(false);

    return (
        <main className="relative flex flex-col gap-3.75 w-full h-full p-3.75 text-[#1F2937] overflow-y-auto">

            {/* Title Bar */}
            <div className="md:hidden flex justify-between items-center w-full h-auto">
                <div className="flex items-center gap-2.5">
                    <MenuBtn
                        onClick={() => actions.toggleSidebar(true)}
                    />
                    <h1 className={`block text-[23px] font-bold`}>Easy<span className='text-[#6D5DFC]'>Do</span></h1>
                </div>
                <AddButton
                    onClick={() => actions.openAddTaskModal()}
                />
            </div>
            {/* Welcome */}
            <div className="flex justify-between items-center w-full h-auto">
                <div className="flex flex-col w-auto h-auto leading-7.5 ">
                    <h2 className="text-[25px] sm:text-[28px] font-bold">Hello, Admin!👋</h2>
                    <p className="text-[#6B7280] leading-5 text-[14px]">Here's what's happening with your tasks todo.</p>
                </div>
                <div className="hidden md:block">
                    <AddButton
                        onClick={() => actions.openAddTaskModal()}
                    />
                </div>
            </div>
            {/* Task Card */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 w-full h-auto">
                {sidebarItems.slice(0, -1).map((item, idx) => (
                    <TaskCard
                        key={`${item.key}-${idx}`}
                        label={item.label}
                        icon={item.icon}
                        count={stats[item.key]}
                        borColor={item.borderColor}
                        bgColor={item.bgColor}
                    />
                ))}    
            </div>
            {/* Filter */}
            <div className="flex flex-col md:flex-row shrink-0 justify-center items-center gap-2.5 w-full h-auto overflow-hidden text-[14px]">
                <div className="w-full h-full">
                    <SearchBar />
                </div>
                <div className="flex justify-between items-center w-full h-full gap-2.5">
                    <CategoryFilter
                        activeCategory={state.category}
                        openFilter={() => setIsOpenCatFilter(true)}
                    />
                    <SortFilter
                        activeSort={state.sort}
                        openFilter={() => setIsOpenSortFilter(true)}
                    />
                </div>
            </div>
            {/* Tasks List */}
            {state.activeTab !== "trash" && (
                <div className="w-full h-full flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-auto flex gap-1.25">
                        {sidebarItems.slice(0, -1).map((item, idx) => (
                            <StatusBtn
                                key={`${item.key}-${idx}`}
                                label={item.label}
                                isActive={state.activeTab === item.key}
                                setActiveTab={() => actions.setActiveTab(item.key)}
                            />
                        ))}
                    </div>
                    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
                        <div className="grid grid-cols-1 gap-2.5 w-full h-auto">
                            {filterProcessTasks.length === 0 && (
                                <div className="absolute inset-0 grid place-content-center text-[16px] font-medium text-[#6B7280]">
                                    {state.activeTab === "all" && "No tasks found"}
                                    {state.activeTab === "completed" && "No completed tasks"}
                                    {state.activeTab === "active" && "No active tasks"}
                                    {state.activeTab === "favorites" && "No favorite tasks"}
                                </div>
                            )}
                            {filterProcessTasks.map(todo => (
                                <TaskList
                                    key={todo.id}
                                    task={todo.task}
                                    category={todo.category}
                                    priority={todo.priority}
                                    endDate={formatDate(todo.deadline) || ""}
                                    status={todo.status}

                                    check={() => actions.isCompleted(todo.id)}
                                    openEditMenu={() => actions.openEditMenuModal(todo.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* Trash */}
            {state.activeTab === "trash" && (
                <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
                    <div className="grid grid-cols-1 gap-2.5 w-full h-auto">
                        {state.trash.length === 0 && (
                            <div className="absolute inset-0 grid place-content-center text-[16px] font-medium text-[#6B7280]">
                                Trash is empty
                            </div>
                        )}
                        {state.trash.map(item => (
                            <TrashList
                                key={item.id}
                                task={item.task}
                                category={item.category}
                                priority={item.priority}
                                endDate={formatDate(item.deadline) || ""}
                                status={item.status}

                                restoreTask={() => actions.restoreTask(item.id)}
                                deleteTask={() => actions.permanentDeleted(item.id)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {isOpenCatFilter && (
                <CategoryFilterModal
                    title="Category"
                    activeCat={state.category}
                    filterGrp={categories}
                    filterFn={actions}
                    closeFilter={() => setIsOpenCatFilter(false)}
                />
            )}
            {isOpenSortFilter && (
                <SortFilterModal
                    activeSort={state.sort}
                    filterFn={actions}
                    closeFilter={() => setIsOpenSortFilter(false)}
                />
            )}

        </main>
    )
}

export default MainBody;