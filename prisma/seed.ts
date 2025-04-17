import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function main() {
  const hashedPassword = await hash("test", 12);
  const userData: Prisma.UserCreateInput[] = [
    {
      username: "Alice",
      password: hashedPassword,
    },
  ];

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
