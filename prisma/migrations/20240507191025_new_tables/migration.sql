-- CreateTable
CREATE TABLE `spiderverses` (
    `id` VARCHAR(191) NOT NULL,
    `spider_man_name` VARCHAR(191) NOT NULL,
    `spider_man_password` VARCHAR(191) NOT NULL,
    `earth` INTEGER NOT NULL,
    `powers` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `spiderverses_spider_man_name_key`(`spider_man_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Villains` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `villain_name` VARCHAR(191) NOT NULL,
    `powers` VARCHAR(191) NOT NULL,
    `fight_vs` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Villains` ADD CONSTRAINT `Villains_fight_vs_fkey` FOREIGN KEY (`fight_vs`) REFERENCES `spiderverses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
