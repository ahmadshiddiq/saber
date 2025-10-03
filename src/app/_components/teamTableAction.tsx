"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";

export function TeamTableAction() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="secondary">Out</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you sure you want to substitute?
					</AlertDialogTitle>
					<AlertDialogDescription>
						After clicking continue, the player will be out for the rest of the
						game. And will replace with someone from the bench.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<Select>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select Player" />
					</SelectTrigger>
					<SelectContent>
						{/* list player that not active play */}
						<SelectItem value="light">Light</SelectItem>
					</SelectContent>
				</Select>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
