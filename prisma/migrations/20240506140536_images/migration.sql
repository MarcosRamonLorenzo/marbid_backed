/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "avatar_img" TEXT NOT NULL DEFAULT 'https://c02.purpledshub.com/uploads/sites/48/2024/03/ngc-604-webb-hero.jpg?w=940&webp=1',
ADD COLUMN     "backround_img" TEXT NOT NULL DEFAULT 'https://picsum.photos/1920/1080.jpg';
