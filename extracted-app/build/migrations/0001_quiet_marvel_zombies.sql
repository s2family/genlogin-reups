CREATE TABLE IF NOT EXISTS `task_schedules` (
	`id` text PRIMARY KEY NOT NULL,
	`schedule_id` text NOT NULL,
	`task_id` text NOT NULL,
	FOREIGN KEY (`schedule_id`) REFERENCES `schedules`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade
);--> statement-breakpoint
ALTER TABLE schedules ADD `user_id` integer NOT NULL;--> statement-breakpoint
ALTER TABLE schedules ADD `cron` text NOT NULL;--> statement-breakpoint
ALTER TABLE schedules ADD `timezone` text NOT NULL;--> statement-breakpoint
ALTER TABLE schedules ADD `override_previous_run` integer;--> statement-breakpoint
ALTER TABLE schedules ADD `next_run_at` integer;--> statement-breakpoint
ALTER TABLE schedules ADD `last_run_at` integer;