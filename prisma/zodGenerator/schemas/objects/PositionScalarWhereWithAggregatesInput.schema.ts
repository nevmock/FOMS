import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PositionScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => PositionScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => PositionScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PositionScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => PositionScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		company_id: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		level_id: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		officer_id: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		basic_salary: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable()
	})
	.strict();

export const PositionScalarWhereWithAggregatesInputObjectSchema = Schema;
