import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function AddPlayer() {
	return (
		<div className="flex gap-4">
			<Input placeholder="Player Name" />
			<Button>Add Player</Button>
		</div>
	);
}
