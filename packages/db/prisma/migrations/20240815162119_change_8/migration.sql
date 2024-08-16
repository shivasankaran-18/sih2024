/*
  Warnings:

  - You are about to drop the column `name` on the `UserDetails` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `UserDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserDetails" DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "achivements" TEXT[];
