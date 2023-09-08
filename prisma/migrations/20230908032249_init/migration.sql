/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `reservations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "deletedAt";
