import EditMenuModal from "./EditMenuModal";
import ViewDetailsModal from "./ViewDetailsModal";
import AddTaskModal from "./AddTaskModal";
import { useTaskContext } from "../../context/TaskContextProvider";

const ModalManager = () => {
	const { state } = useTaskContext();
	return (
		<>
			{state.editMenuModal && <EditMenuModal />}
			{state.viewDetailsModal && <ViewDetailsModal />}
			{state.addTaskModal && <AddTaskModal />}
		</>
	);
}
export default ModalManager;