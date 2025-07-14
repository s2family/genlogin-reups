ALTER TABLE apps ADD `metadata` text;--> statement-breakpoint
ALTER TABLE apps ADD `type` text;--> statement-breakpoint
ALTER TABLE apps ADD `expired_at` integer;--> statement-breakpoint
CREATE INDEX `app_expired_at_idx` ON `apps` (`expired_at`);