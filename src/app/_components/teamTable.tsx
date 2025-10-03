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

interface Props {
	teamName?: string;
}

export function TeamTable(props: Props) {
	return (
		<Table>
			<TableCaption>Team {props.teamName}</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Played</TableHead>
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
