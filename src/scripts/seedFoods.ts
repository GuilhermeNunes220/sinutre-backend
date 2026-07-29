import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const USER_ID = 1;

const foods = [
  {
    name: "Banana",
    caloriesPer100g: 89,
    carbsPer100g: 22.8,
    proteinPer100g: 1.1,
    fatPer100g: 0.3,
  },
  {
    name: "Maçã",
    caloriesPer100g: 52,
    carbsPer100g: 13.8,
    proteinPer100g: 0.3,
    fatPer100g: 0.2,
  },
  {
    name: "Laranja",
    caloriesPer100g: 47,
    carbsPer100g: 11.8,
    proteinPer100g: 0.9,
    fatPer100g: 0.1,
  },
  {
    name: "Mamão",
    caloriesPer100g: 43,
    carbsPer100g: 10.8,
    proteinPer100g: 0.5,
    fatPer100g: 0.3,
  },
  {
    name: "Manga",
    caloriesPer100g: 60,
    carbsPer100g: 15,
    proteinPer100g: 0.8,
    fatPer100g: 0.4,
  },
  {
    name: "Abacaxi",
    caloriesPer100g: 50,
    carbsPer100g: 13.1,
    proteinPer100g: 0.5,
    fatPer100g: 0.1,
  },
  {
    name: "Melancia",
    caloriesPer100g: 30,
    carbsPer100g: 7.6,
    proteinPer100g: 0.6,
    fatPer100g: 0.2,
  },
  {
    name: "Morango",
    caloriesPer100g: 32,
    carbsPer100g: 7.7,
    proteinPer100g: 0.7,
    fatPer100g: 0.3,
  },
  {
    name: "Uva",
    caloriesPer100g: 69,
    carbsPer100g: 18.1,
    proteinPer100g: 0.7,
    fatPer100g: 0.2,
  },
  {
    name: "Abacate",
    caloriesPer100g: 160,
    carbsPer100g: 8.5,
    proteinPer100g: 2,
    fatPer100g: 14.7,
  },
  {
    name: "Arroz branco cozido",
    caloriesPer100g: 128,
    carbsPer100g: 28.1,
    proteinPer100g: 2.5,
    fatPer100g: 0.2,
  },
  {
    name: "Arroz integral cozido",
    caloriesPer100g: 124,
    carbsPer100g: 25.8,
    proteinPer100g: 2.6,
    fatPer100g: 1,
  },
  {
    name: "Feijão carioca cozido",
    caloriesPer100g: 76,
    carbsPer100g: 13.6,
    proteinPer100g: 4.8,
    fatPer100g: 0.5,
  },
  {
    name: "Feijão preto cozido",
    caloriesPer100g: 77,
    carbsPer100g: 14,
    proteinPer100g: 4.5,
    fatPer100g: 0.5,
  },
  {
    name: "Lentilha cozida",
    caloriesPer100g: 116,
    carbsPer100g: 20.1,
    proteinPer100g: 9,
    fatPer100g: 0.4,
  },
  {
    name: "Grão-de-bico cozido",
    caloriesPer100g: 164,
    carbsPer100g: 27.4,
    proteinPer100g: 8.9,
    fatPer100g: 2.6,
  },
  {
    name: "Macarrão cozido",
    caloriesPer100g: 157,
    carbsPer100g: 30.9,
    proteinPer100g: 5.8,
    fatPer100g: 0.9,
  },
  {
    name: "Cuscuz de milho cozido",
    caloriesPer100g: 112,
    carbsPer100g: 25.3,
    proteinPer100g: 2.2,
    fatPer100g: 0.7,
  },
  {
    name: "Tapioca",
    caloriesPer100g: 232,
    carbsPer100g: 57.6,
    proteinPer100g: 0.2,
    fatPer100g: 0,
  },
  {
    name: "Batata inglesa cozida",
    caloriesPer100g: 87,
    carbsPer100g: 20.1,
    proteinPer100g: 1.9,
    fatPer100g: 0.1,
  },
  {
    name: "Batata-doce cozida",
    caloriesPer100g: 77,
    carbsPer100g: 18.4,
    proteinPer100g: 0.6,
    fatPer100g: 0.1,
  },
  {
    name: "Mandioca cozida",
    caloriesPer100g: 125,
    carbsPer100g: 30.1,
    proteinPer100g: 0.6,
    fatPer100g: 0.3,
  },
  {
    name: "Peito de frango grelhado",
    caloriesPer100g: 165,
    carbsPer100g: 0,
    proteinPer100g: 31,
    fatPer100g: 3.6,
  },
  {
    name: "Coxa de frango assada",
    caloriesPer100g: 215,
    carbsPer100g: 0,
    proteinPer100g: 26,
    fatPer100g: 12,
  },
  {
    name: "Carne bovina grelhada",
    caloriesPer100g: 252,
    carbsPer100g: 0,
    proteinPer100g: 26,
    fatPer100g: 15,
  },
  {
    name: "Carne moída cozida",
    caloriesPer100g: 212,
    carbsPer100g: 0,
    proteinPer100g: 26,
    fatPer100g: 12,
  },
  {
    name: "Peixe grelhado",
    caloriesPer100g: 128,
    carbsPer100g: 0,
    proteinPer100g: 26,
    fatPer100g: 2.7,
  },
  {
    name: "Salmão grelhado",
    caloriesPer100g: 206,
    carbsPer100g: 0,
    proteinPer100g: 22,
    fatPer100g: 12,
  },
  {
    name: "Atum em água",
    caloriesPer100g: 116,
    carbsPer100g: 0,
    proteinPer100g: 25.5,
    fatPer100g: 0.8,
  },
  {
    name: "Ovo cozido",
    caloriesPer100g: 155,
    carbsPer100g: 1.1,
    proteinPer100g: 13,
    fatPer100g: 11,
  },
  {
    name: "Ovo frito",
    caloriesPer100g: 196,
    carbsPer100g: 0.8,
    proteinPer100g: 13.6,
    fatPer100g: 15,
  },
  {
    name: "Leite integral",
    caloriesPer100g: 61,
    carbsPer100g: 4.8,
    proteinPer100g: 3.2,
    fatPer100g: 3.3,
  },
  {
    name: "Leite desnatado",
    caloriesPer100g: 35,
    carbsPer100g: 5,
    proteinPer100g: 3.4,
    fatPer100g: 0.1,
  },
  {
    name: "Iogurte natural",
    caloriesPer100g: 61,
    carbsPer100g: 4.7,
    proteinPer100g: 3.5,
    fatPer100g: 3.3,
  },
  {
    name: "Queijo mussarela",
    caloriesPer100g: 280,
    carbsPer100g: 3.1,
    proteinPer100g: 22,
    fatPer100g: 17,
  },
  {
    name: "Queijo coalho",
    caloriesPer100g: 320,
    carbsPer100g: 3,
    proteinPer100g: 24,
    fatPer100g: 24,
  },
  {
    name: "Pão francês",
    caloriesPer100g: 300,
    carbsPer100g: 58.6,
    proteinPer100g: 8,
    fatPer100g: 3.1,
  },
  {
    name: "Pão integral",
    caloriesPer100g: 247,
    carbsPer100g: 41,
    proteinPer100g: 13,
    fatPer100g: 4.2,
  },
  {
    name: "Aveia em flocos",
    caloriesPer100g: 394,
    carbsPer100g: 66.6,
    proteinPer100g: 13.9,
    fatPer100g: 8.5,
  },
  {
    name: "Granola",
    caloriesPer100g: 471,
    carbsPer100g: 64,
    proteinPer100g: 10,
    fatPer100g: 20,
  },
  {
    name: "Amendoim",
    caloriesPer100g: 567,
    carbsPer100g: 16.1,
    proteinPer100g: 25.8,
    fatPer100g: 49.2,
  },
  {
    name: "Castanha-de-caju",
    caloriesPer100g: 553,
    carbsPer100g: 30.2,
    proteinPer100g: 18.2,
    fatPer100g: 43.8,
  },
  {
    name: "Alface",
    caloriesPer100g: 15,
    carbsPer100g: 2.9,
    proteinPer100g: 1.4,
    fatPer100g: 0.2,
  },
  {
    name: "Tomate",
    caloriesPer100g: 18,
    carbsPer100g: 3.9,
    proteinPer100g: 0.9,
    fatPer100g: 0.2,
  },
  {
    name: "Cenoura cozida",
    caloriesPer100g: 35,
    carbsPer100g: 8.2,
    proteinPer100g: 0.8,
    fatPer100g: 0.2,
  },
  {
    name: "Brócolis cozido",
    caloriesPer100g: 35,
    carbsPer100g: 7.2,
    proteinPer100g: 2.4,
    fatPer100g: 0.4,
  },
  {
    name: "Beterraba cozida",
    caloriesPer100g: 44,
    carbsPer100g: 10,
    proteinPer100g: 1.7,
    fatPer100g: 0.2,
  },
  {
    name: "Abóbora cozida",
    caloriesPer100g: 40,
    carbsPer100g: 10,
    proteinPer100g: 1,
    fatPer100g: 0.1,
  },
  {
    name: "Azeite de oliva",
    caloriesPer100g: 884,
    carbsPer100g: 0,
    proteinPer100g: 0,
    fatPer100g: 100,
  },
  {
    name: "Manteiga",
    caloriesPer100g: 717,
    carbsPer100g: 0.1,
    proteinPer100g: 0.9,
    fatPer100g: 81.1,
  },
];

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      id: USER_ID,
    },
  });

  if (!user) {
    throw new Error(`Usuário com ID ${USER_ID} não foi encontrado.`);
  }

  let created = 0;
  let skipped = 0;

  for (const food of foods) {
    const existingFood = await prisma.food.findFirst({
      where: {
        userId: USER_ID,
        name: food.name,
      },
    });

    if (existingFood) {
      console.log(`Já existe: ${food.name}`);
      skipped++;
      continue;
    }

    await prisma.food.create({
      data: {
        ...food,
        userId: USER_ID,
      },
    });

    console.log(`Criado: ${food.name}`);
    created++;
  }

  console.log("");
  console.log("Seed finalizada!");
  console.log(`Alimentos criados: ${created}`);
  console.log(`Alimentos ignorados: ${skipped}`);
}

main()
  .catch((error) => {
    console.error("Erro ao cadastrar alimentos:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });