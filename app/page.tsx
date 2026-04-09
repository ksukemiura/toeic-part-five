import { sql } from "@/app/lib/db";

async function getDbVersion() {
  const result = await sql`SELECT version()`;
  return result[0].version;
}

export default async function Home() {
  const version = await getDbVersion();
  return <>{version}</>;
}
