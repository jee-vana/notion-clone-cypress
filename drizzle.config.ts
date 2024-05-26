import { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { boolean } from 'drizzle-orm/pg-core';
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database url');
}

export default {
  schema: './src/lib/supabase/schema.ts',
  out: './migrations',
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
  
} satisfies Config;
