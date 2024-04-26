/*
  Warnings:

  - You are about to drop the `organization_memberships` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_familyId_fkey";

-- DropForeignKey
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_roleId_fkey";

-- DropForeignKey
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_invites" DROP CONSTRAINT "user_invites_familyId_fkey";

-- DropTable
DROP TABLE "organization_memberships";

-- DropTable
DROP TABLE "organizations";

-- CreateTable
CREATE TABLE "families" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "image" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/150',

    CONSTRAINT "families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "family_memberships" (
    "userId" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "family_memberships_pkey" PRIMARY KEY ("userId","familyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "families_slug_key" ON "families"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "families_name_key" ON "families"("name");

-- AddForeignKey
ALTER TABLE "user_invites" ADD CONSTRAINT "user_invites_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "families"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_memberships" ADD CONSTRAINT "family_memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_memberships" ADD CONSTRAINT "family_memberships_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "families"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_memberships" ADD CONSTRAINT "family_memberships_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
