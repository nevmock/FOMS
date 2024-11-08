import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SalaryScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => SalaryScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => SalaryScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SalaryScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => SalaryScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		employee_id: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		month_salary: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		position_allowance: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		bjps_allowance: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		tax_allowance: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		other_allowance: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		position_deduction: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		bpjs_deduction: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		tax_deduction: z
			.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		other_deduction: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
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

export const SalaryScalarWhereWithAggregatesInputObjectSchema = Schema;
