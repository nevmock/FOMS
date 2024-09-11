import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PositionScalarWhereInputObjectSchema),
				z.lazy(() => PositionScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => PositionScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PositionScalarWhereInputObjectSchema),
				z.lazy(() => PositionScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		company_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		level: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		officer: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		basic_salary: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable()
	})
	.strict();

export const PositionScalarWhereInputObjectSchema = Schema;
