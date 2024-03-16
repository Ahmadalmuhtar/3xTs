-- CreateTable
CREATE TABLE "ProjectRequests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "budget" TEXT NOT NULL,

    CONSTRAINT "ProjectRequests_pkey" PRIMARY KEY ("id")
);
