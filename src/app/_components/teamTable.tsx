import { TeamTableAction } from "~/app/_components/teamTableAction";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table";

export function TeamTable() {
	return (
		<Table>
			<TableCaption>Team A</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Play Count</TableHead>
					<TableHead className="w-10" />
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Ahmad</TableCell>
					<TableCell>2</TableCell>
					<TableCell>
						<TeamTableAction />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
