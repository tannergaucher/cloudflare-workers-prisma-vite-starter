-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Info', 'Warn', 'Error');

-- CreateTable
CREATE TABLE "Log" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "level" "Level" NOT NULL,
    "message" STRING NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
