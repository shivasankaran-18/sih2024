-- CreateTable
CREATE TABLE "Alumni" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passwd" TEXT NOT NULL,
    "phno" INTEGER NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "skills" TEXT[],

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "AlumniEducation" (
    "id" SERIAL NOT NULL,
    "collegename" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "major" TEXT NOT NULL,
    "alumniemail" TEXT NOT NULL,

    CONSTRAINT "AlumniEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEducation" (
    "id" SERIAL NOT NULL,
    "collegename" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "startyear" INTEGER NOT NULL,
    "endyear" INTEGER NOT NULL,
    "major" TEXT NOT NULL,
    "useremail" TEXT NOT NULL,

    CONSTRAINT "UserEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "useremail" TEXT NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phno" INTEGER NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "interest" TEXT[],
    "skills" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "AlumniBlog" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "AlumniBlog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workshop" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stime" TEXT NOT NULL,
    "etime" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkshopParticipant" (
    "id" SERIAL NOT NULL,
    "workshopid" INTEGER NOT NULL,
    "participant" TEXT NOT NULL,

    CONSTRAINT "WorkshopParticipant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlumniEducation" ADD CONSTRAINT "AlumniEducation_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEducation" ADD CONSTRAINT "UserEducation_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniBlog" ADD CONSTRAINT "AlumniBlog_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopParticipant" ADD CONSTRAINT "WorkshopParticipant_workshopid_fkey" FOREIGN KEY ("workshopid") REFERENCES "Workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopParticipant" ADD CONSTRAINT "WorkshopParticipant_participant_fkey" FOREIGN KEY ("participant") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
