import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SalaryWhereInputObjectSchema),
				z.lazy(() => SalaryWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => SalaryWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SalaryWhereInputObjectSchema),
				z.lazy(() => SalaryWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		employee_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		month_salary: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		position_allowance: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		bjps_allowance: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		tax_allowance: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		other_allowance: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		position_deduction: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		bpjs_deduction: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		tax_deduction: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		other_deduction: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		employee: z
			.union([
				z.lazy(() => EmployeeRelationFilterObjectSchema),
				z.lazy(() => EmployeeWhereInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const SalaryWhereInputObjectSchema = Schema;
