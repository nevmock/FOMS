/*
  Warnings:

  - You are about to drop the column `level` on the `position` table. All the data in the column will be lost.
  - You are about to drop the column `officer` on the `position` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[company_id]` on the table `position` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[level_id]` on the table `position` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[officer_id]` on the table `position` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp_number` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level_id` to the `position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officer_id` to the `position` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `whatsapp_number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `position` DROP COLUMN `level`,
    DROP COLUMN `officer`,
    ADD COLUMN `level_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `officer_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `level` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `officer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `employee_email_key` ON `employee`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `position_company_id_key` ON `position`(`company_id`);

-- CreateIndex
CREATE UNIQUE INDEX `position_level_id_key` ON `position`(`level_id`);

-- CreateIndex
CREATE UNIQUE INDEX `position_officer_id_key` ON `position`(`officer_id`);

-- AddForeignKey
ALTER TABLE `position` ADD CONSTRAINT `position_level_id_fkey` FOREIGN KEY (`level_id`) REFERENCES `level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `position` ADD CONSTRAINT `position_officer_id_fkey` FOREIGN KEY (`officer_id`) REFERENCES `officer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
