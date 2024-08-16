/*
  Warnings:

  - Added the required column `otheralumniname` to the `AlumniConnection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `UserConnection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlumniConnection" ADD COLUMN     "otheralumniname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserConnection" ADD COLUMN     "username" TEXT NOT NULL;
