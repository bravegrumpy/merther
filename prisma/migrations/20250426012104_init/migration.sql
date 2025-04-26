-- CreateTable
CREATE TABLE "chapter" (
    "keyId" UUID NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "href" VARCHAR(6) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "chapter" INTEGER NOT NULL,
    "title" VARCHAR NOT NULL,
    "pubDate" DATE NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "description" VARCHAR(255),
    "notes" VARCHAR(255),
    "endnotes" VARCHAR(255),
    "body" XML NOT NULL,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("keyId")
);
