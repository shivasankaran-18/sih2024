-- AlterTable
ALTER TABLE "AlumniDetails" ADD COLUMN     "achievements" TEXT[];

-- CreateTable
CREATE TABLE "AlumniWork" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "companyname" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" TEXT NOT NULL,

    CONSTRAINT "AlumniWork_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlumniWork" ADD CONSTRAINT "AlumniWork_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;
