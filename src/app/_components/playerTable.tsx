import { PlayerTableAction } from "~/app/_components/playerTableAction";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table";

export function PlayerTable() {
	return (
		<Table>
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
					<TableCell>1</TableCell>
					<TableCell>
						<PlayerTableAction />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
