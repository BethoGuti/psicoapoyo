import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import dotenv from "dotenv";

dotenv.config();

const client = await db.connect();

async function seedUsers() {
  console.log("Creando la tabla de User");
  await client.sql`DROP TABLE IF EXISTS users`;
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );`;
  console.log("Tabla de usuarios creada");

  // Datos de ejemplo
  const users = [
    { name: "John Doe", email: "john@example.com", password: "password123" },
    { name: "Jane Doe", email: "jane@example.com", password: "password456" },
  ];

  // Encriptar contraseñas y agregar usuarios a la base de datos
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await client.sql`
      INSERT INTO users (name, email, password)
      VALUES (${user.name}, ${user.email}, ${hashedPassword});
    `;
  }

  console.log("Datos de usuarios insertados");
}

async function seedConsultas() {
  console.log("Creando la tabla de consultas");
  await client.sql`DROP TABLE IF EXISTS consultas`;
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`CREATE TABLE IF NOT EXISTS consultas (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        descripcion TEXT NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        hora TIME NOT NULL,
        fecha DATE NOT NULL
    );`;
  console.log("Tabla de consultas creada");
}
async function seedDatabase() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedConsultas();
    await client.sql`COMMIT`;
    console.log("Base de datos sembrada exitosamente");
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error("Error al sembrar la base de datos:", error);
  } finally {
    await client.release();
  }
}

// Ejecutar el seeding
seedDatabase().catch((err) => console.error(err));
