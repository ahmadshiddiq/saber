import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function TeamSize() {
	return (
		<div className="flex gap-4">
			<Input type="number" placeholder="Team Size" defaultValue={6} />
			<Button variant="outline">Update Team Size</Button>
		</div>
	);
}
