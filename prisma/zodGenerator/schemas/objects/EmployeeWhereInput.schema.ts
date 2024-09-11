import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CompanyRelationFilterObjectSchema } from './CompanyRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { PositionRelationFilterObjectSchema } from './PositionRelationFilter.schema';
import { PositionWhereInputObjectSchema } from './PositionWhereInput.schema';
import { SalaryListRelationFilterObjectSchema } from './SalaryListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => EmployeeWhereInputObjectSchema),
				z.lazy(() => EmployeeWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => EmployeeWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EmployeeWhereInputObjectSchema),
				z.lazy(() => EmployeeWhereInputObjectSchema).array()
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
			.nullable(),
		company: z
			.union([
				z.lazy(() => CompanyRelationFilterObjectSchema),
				z.lazy(() => CompanyWhereInputObjectSchema)
			])
			.optional()
			.nullable(),
		position: z
			.union([
				z.lazy(() => PositionRelationFilterObjectSchema),
				z.lazy(() => PositionWhereInputObjectSchema)
			])
			.optional()
			.nullable(),
		salaries: z.lazy(() => SalaryListRelationFilterObjectSchema).optional()
	})
	.strict();

export const EmployeeWhereInputObjectSchema = Schema;
