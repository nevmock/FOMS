import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => EmployeeScalarWhereInputObjectSchema),
				z.lazy(() => EmployeeScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => EmployeeScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EmployeeScalarWhereInputObjectSchema),
				z.lazy(() => EmployeeScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		company_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		position_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		nip: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		tmt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		gender: z
			.union([z.lazy(() => EnumGenderFilterObjectSchema), z.lazy(() => GenderSchema)])
			.optional(),
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

export const EmployeeScalarWhereInputObjectSchema = Schema;
