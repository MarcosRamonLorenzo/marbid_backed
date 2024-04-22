/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "updatedAt";
