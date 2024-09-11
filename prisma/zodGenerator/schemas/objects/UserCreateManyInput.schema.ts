import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
	.object({
		id: z.string().optional(),
		email: z.string(),
		password: z.string().optional().nullable(),
		role: z.lazy(() => RoleSchema).optional(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable()
	})
	.strict();

export const UserCreateManyInputObjectSchema = Schema;
