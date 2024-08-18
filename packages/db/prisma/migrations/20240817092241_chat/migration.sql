-- CreateTable
CREATE TABLE "Conversation" (
    "id" SERIAL NOT NULL,
    "alumniemail" TEXT NOT NULL,
    "studemail" TEXT NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "convId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "senderEmail" TEXT NOT NULL,
    "receiverEmail" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_alumniemail_fkey" FOREIGN KEY ("alumniemail") REFERENCES "Alumni"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_studemail_fkey" FOREIGN KEY ("studemail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_convId_fkey" FOREIGN KEY ("convId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
