/*
  Warnings:

  - You are about to drop the column `github` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `phno` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `interest` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phno` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlumniBlog" DROP CONSTRAINT "AlumniBlog_alumniemail_fkey";

-- DropForeignKey
ALTER TABLE "AlumniEducation" DROP CONSTRAINT "AlumniEducation_alumniemail_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_alumniemail_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_useremail_fkey";

-- DropForeignKey
ALTER TABLE "UserEducation" DROP CONSTRAINT "UserEducation_useremail_fkey";

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_alumniemail_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopParticipant" DROP CONSTRAINT "WorkshopParticipant_participant_fkey";

-- AlterTable
ALTER TABLE "Alumni" DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "phno",
DROP COLUMN "skills";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "github",
DROP COLUMN "interest",
DROP COLUMN "linkedin",
DROP COLUMN "phno",
DROP COLUMN "skills";

-- CreateTable
CREATE TABLE "AlumniDetails" (
    "email" TEXT NOT NULL,
    "phno" INTEGER NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "skills" TEXT[],

    CONSTRAINT "AlumniDetails_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "UserDetails" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phno" INTEGER NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "interest" TEXT[],
    "skills" TEXT[],

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "AlumniDetails" ADD CONSTRAINT "AlumniDetails_email_fkey" FOREIGN KEY ("email") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniEducation" ADD CONSTRAINT "AlumniEducation_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEducation" ADD CONSTRAINT "UserEducation_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "UserDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "UserDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDetails" ADD CONSTRAINT "UserDetails_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniBlog" ADD CONSTRAINT "AlumniBlog_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopParticipant" ADD CONSTRAINT "WorkshopParticipant_participant_fkey" FOREIGN KEY ("participant") REFERENCES "UserDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;
