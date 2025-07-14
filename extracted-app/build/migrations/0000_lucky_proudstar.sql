CREATE TABLE IF NOT EXISTS `apps` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`version` text NOT NULL,
	`script` text,
	`table` text,
	`input` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `schedules` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`config` text NOT NULL,
	`enabled` integer,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `task_run_profile_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` integer,
	`run_id` text NOT NULL,
	`content` text NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`run_id`) REFERENCES `task_runs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `task_run_monitors` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`run_id` text NOT NULL,
	`cpu_average` real NOT NULL,
	`memory_average` real NOT NULL,
	`cpu_max` real NOT NULL,
	`memory_max` real NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`run_id`) REFERENCES `task_runs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `task_run_profile_status` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` integer,
	`profile_name` text,
	`status` integer DEFAULT 0,
	`run_id` text NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	`finished_at` integer,
	FOREIGN KEY (`run_id`) REFERENCES `task_runs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `task_run_profile_storages` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` integer,
	`run_id` text NOT NULL,
	`data` text,
	`created_at` integer,
	FOREIGN KEY (`run_id`) REFERENCES `task_runs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `task_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`task_id` text NOT NULL,
	`app_id` text NOT NULL,
	`status` integer DEFAULT 0,
	`created_at` integer,
	`updated_at` integer,
	`finished_at` integer,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`app_id`) REFERENCES `apps`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`app_id` text NOT NULL,
	`name` text NOT NULL,
	`input` text,
	`config` text DEFAULT [object Object],
	`profiles` text DEFAULT [object Object],
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`app_id`) REFERENCES `apps`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `apps_id_unique` ON `apps` (`id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `app_name_idx` ON `apps` (`name`,`user_id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `app_created_at_idx` ON `apps` (`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `app_updated_at_idx` ON `apps` (`updated_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_log_run_idx` ON `task_run_profile_logs` (`run_id`,`profile_id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_profile_status_profile_idx` ON `task_run_profile_status` (`run_id`,`profile_name`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_profile_status_status_idx` ON `task_run_profile_status` (`run_id`,`status`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_profile_status_created_at_idx` ON `task_run_profile_status` (`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_profile_status_updated_at_idx` ON `task_run_profile_status` (`updated_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_profile_status_finished_at_idx` ON `task_run_profile_status` (`finished_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_storage_run_idx` ON `task_run_profile_storages` (`run_id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_storage_created_at_idx` ON `task_run_profile_storages` (`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_app_idx` ON `task_runs` (`app_id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_task_idx` ON `task_runs` (`task_id`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_created_at_idx` ON `task_runs` (`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_updated_at_idx` ON `task_runs` (`updated_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_run_finished_at_idx` ON `task_runs` (`finished_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_app_idx` ON `tasks` (`app_id`,`user_id`,`name`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_created_at_idx` ON `tasks` (`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `task_updated_at_idx` ON `tasks` (`updated_at`);