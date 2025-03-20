-- CreateEnum
CREATE TYPE "AgeGroup" AS ENUM ('UNDER_18', 'AGE_19_30', 'AGE_31_40', 'AGE_41_50', 'AGE_51_60', 'OVER_60');

-- CreateTable
CREATE TABLE "WaitlistEmail" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "ageGroup" "AgeGroup" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaitlistEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistEmail_email_key" ON "WaitlistEmail"("email");
