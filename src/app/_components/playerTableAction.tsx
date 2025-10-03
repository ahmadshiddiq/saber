"use client";

import { useState } from "react";
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
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const radioOptions = [
	{
		label: "Switch",
		value: "switch",
	},
	{
		label: "Skip Turn",
		value: "skip_turn",
	},
	{
		label: "Remove",
		value: "remove",
	},
];

export function PlayerTableAction() {
	const [value, setValue] = useState(radioOptions[0]?.value);

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Action</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Update Player</AlertDialogTitle>
					<AlertDialogDescription>
						Choose an action to perform on the player.
					</AlertDialogDescription>
					<RadioGroup
						defaultValue={value}
						onValueChange={setValue}
						className="mt-2"
					>
						{radioOptions.map((option) => (
							<div className="flex items-center space-x-2" key={option.value}>
								<RadioGroupItem value={option.value} id={option.value} />
								<Label htmlFor={option.value}>{option.label}</Label>
							</div>
						))}
					</RadioGroup>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
