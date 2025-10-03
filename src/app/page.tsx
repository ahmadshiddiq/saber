import { AddPlayer } from "~/app/_components/addPlayer";
import { DistributeTeam } from "~/app/_components/distributeTeam";
import { PlayerTable } from "~/app/_components/playerTable";
import { ReplaceTeam } from "~/app/_components/replaceTeam";
import { TeamSize } from "~/app/_components/teamSize";
import { TeamTable } from "~/app/_components/teamTable";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
	return (
		<HydrateClient>
			<main className="container mx-auto grid grid-cols-2 gap-6 p-8">
				<div className="col-span-2">
					<h1 className="text-center font-semibold text-2xl text-slate-700">
						Saber Football Management
					</h1>
				</div>

				<TeamTable teamName="A" />
				<TeamTable teamName="B" />

				<div className="col-span-2">
					<PlayerTable />
				</div>

				<div className="col-span-2">
					<AddPlayer />
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
