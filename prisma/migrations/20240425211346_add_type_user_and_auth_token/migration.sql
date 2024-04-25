/*
  Warnings:

  - A unique constraint covering the columns `[tokenAuth]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tokenAuth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tokenAuth" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_tokenAuth_key" ON "User"("tokenAuth");
