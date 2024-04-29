-- AlterTable
ALTER TABLE "User" ALTER COLUMN "country" SET DEFAULT '',
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "image" SET DEFAULT 'https://res.cloudinary.com/djzjepmnr/image/upload/v1633660004/default-user-image.png',
ALTER COLUMN "label" SET DEFAULT '',
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "role" SET DEFAULT 'USER';
