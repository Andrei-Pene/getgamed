/*
  Warnings:

  - You are about to alter the column `fundingGoal` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "fundingGoal" SET DATA TYPE INTEGER;
