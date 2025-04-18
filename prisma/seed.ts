import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await hash("test", 12);

  const userData: Prisma.UserCreateInput[] = [
    {
      username: "Alice",
      password: hashedPassword,
      isMember: true,
      posts: {
        create: [
          {
            title: "Hello World",
            content: "This is my first post!",
          },
          {
            title: "Another Post",
            content: "Prisma makes things easier.",
          },
        ],
      },
    },
    {
      username: "Bob",
      password: await hash("securepass", 12),
      posts: {
        create: [
          {
            title: "Bob's Thoughts",
            content: "Bob's first post here.",
          },
        ],
      },
    },
  ];

  for (const u of userData) {
    const createdUser = await prisma.user.create({ data: u });
    console.log(`Created user with id: ${createdUser.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
