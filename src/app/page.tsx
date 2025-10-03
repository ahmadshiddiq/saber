import { DistributeTeam } from "~/app/_components/distributeTeam";
import { PlayerTable } from "~/app/_components/playerTable";
import { ReplaceTeam } from "~/app/_components/replaceTeam";
import { TeamSize } from "~/app/_components/teamSize";
import { TeamTable } from "~/app/_components/teamTable";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
	return (
		<HydrateClient>
			<main className="grid grid-cols-2 gap-4 p-8">
				<TeamTable />
				<TeamTable />
				<div className="col-span-2">
					<PlayerTable />
				</div>
				<DistributeTeam />
				<ReplaceTeam />
				<div className="col-span-2">
					<TeamSize />
				</div>
			</main>
		</HydrateClient>
	);
}
