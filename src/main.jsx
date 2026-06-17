// main.jsx
import { createRoot } from 'react-dom/client';
import { TaskContextProvider } from "./assets/feature/context/TaskContextProvider"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<TaskContextProvider>
		<App />
	</TaskContextProvider>
)
