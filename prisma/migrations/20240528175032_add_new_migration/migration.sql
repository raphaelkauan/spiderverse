-- CreateTable
CREATE TABLE "spiderverses" (
    "id" TEXT NOT NULL,
    "spider_man_name" TEXT NOT NULL,
    "spider_man_password" TEXT NOT NULL,
    "earth" INTEGER NOT NULL,
    "powers" TEXT NOT NULL,
    "data_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spiderverses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villains" (
    "id" SERIAL NOT NULL,
    "villain_name" TEXT NOT NULL,
    "powers" TEXT NOT NULL,
    "fight_vs" TEXT NOT NULL,
    "data_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "villains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spiderverses_spider_man_name_key" ON "spiderverses"("spider_man_name");

-- CreateIndex
CREATE INDEX "Villains_fight_vs_fkey" ON "villains"("fight_vs");

-- AddForeignKey
ALTER TABLE "villains" ADD CONSTRAINT "villains_fight_vs_fkey" FOREIGN KEY ("fight_vs") REFERENCES "spiderverses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
