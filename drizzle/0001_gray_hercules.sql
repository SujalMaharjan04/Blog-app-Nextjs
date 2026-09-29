ALTER TABLE "blogs" RENAME COLUMN "content" TO "title";--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "author" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "url" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "likes" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "important";