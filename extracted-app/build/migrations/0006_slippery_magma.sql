CREATE TABLE IF NOT EXISTS `profile_indexes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE schedules ADD `config_type` text DEFAULT 'minute';--> statement-breakpoint
ALTER TABLE schedules ADD `start_at` integer;--> statement-breakpoint
ALTER TABLE `schedules` DROP COLUMN `timezone`;