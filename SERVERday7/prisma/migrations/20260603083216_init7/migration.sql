/*
  Warnings:

  - Added the required column `roll_a` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roll_a" TEXT NOT NULL;
