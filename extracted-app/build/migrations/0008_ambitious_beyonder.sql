CREATE TABLE IF NOT EXISTS `accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`table_id` integer,
	`profile_id` integer,
	`profile_name` text,
	`data` text,
	`status` integer DEFAULT 0,
	`log` text,
	`created_at` integer,
	`updated_at` integer,
	`finished_at` integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `table_account` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`name` text,
	`custom_fields_array` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `table_tree` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`tree` text NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
ALTER TABLE apps ADD `context_menu` text;--> statement-breakpoint
ALTER TABLE apps ADD `enable_context_menu` integer;--> statement-breakpoint
ALTER TABLE tasks ADD `task_source` integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE tasks ADD `task_table_account_id` integer;--> statement-breakpoint
CREATE INDEX `account_app_idx` ON `accounts` (`user_id`);--> statement-breakpoint
CREATE INDEX `account_app_created_at_idx` ON `accounts` (`created_at`);--> statement-breakpoint
CREATE INDEX `account_app_updated_at_idx` ON `accounts` (`updated_at`);