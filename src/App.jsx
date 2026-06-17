// App.jsx
import Sidebar from "./assets/feature/layout/Sidebar";
import MainBody from "./assets/feature/layout/MainBody";
import ModalManager from "./assets/feature/components/modals/ModalManager";

import { useTaskContext } from "./assets/feature/context/TaskContextProvider";

function App() {
	const {
		state,
	} = useTaskContext();
	const sidebarLayout = state.sidebarOpen
						? "grid-cols-1 md:grid-cols-[260px_1fr]"
						: "grid-cols-1 md:grid-cols-[80px_1fr]";
	return (
		<main className={`relative grid ${sidebarLayout} w-full h-screen bg-[#F8F9FC] font-[PlusJakartaSans] duration-100 overflow-hidden`}>
			<Sidebar />
			<MainBody />

			<ModalManager />
		</main>
	)
}

export default App;
