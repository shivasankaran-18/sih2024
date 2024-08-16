/*
  Warnings:

  - You are about to drop the `Connection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_alumniemail_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_useremail_fkey";

-- DropTable
DROP TABLE "Connection";

-- CreateTable
CREATE TABLE "UserConnection" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "useremail" TEXT NOT NULL,

    CONSTRAINT "UserConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniConnection" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "otheralumniemail" TEXT NOT NULL,

    CONSTRAINT "AlumniConnection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserConnection" ADD CONSTRAINT "UserConnection_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConnection" ADD CONSTRAINT "UserConnection_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "UserDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniConnection" ADD CONSTRAINT "AlumniConnection_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniConnection" ADD CONSTRAINT "AlumniConnection_otheralumniemail_fkey" FOREIGN KEY ("otheralumniemail") REFERENCES "AlumniDetails"("email") ON DELETE CASCADE ON UPDATE CASCADE;
