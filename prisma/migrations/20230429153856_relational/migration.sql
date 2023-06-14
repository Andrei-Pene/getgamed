-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "belongsToId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
