import { createFileRoute, Outlet } from "@tanstack/react-router";
import { WorkbenchShell } from "../features/workbench/WorkbenchShell";

export const Route = createFileRoute("/workbench")({
	component: WorkbenchLayout,
});

function WorkbenchLayout() {
	return (
		<WorkbenchShell>
			<Outlet />
		</WorkbenchShell>
	);
}
