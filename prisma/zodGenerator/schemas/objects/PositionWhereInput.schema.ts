import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CompanyRelationFilterObjectSchema } from './CompanyRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { LevelRelationFilterObjectSchema } from './LevelRelationFilter.schema';
import { LevelWhereInputObjectSchema } from './LevelWhereInput.schema';
import { OfficerRelationFilterObjectSchema } from './OfficerRelationFilter.schema';
import { OfficerWhereInputObjectSchema } from './OfficerWhereInput.schema';
import { EmployeeListRelationFilterObjectSchema } from './EmployeeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PositionWhereInputObjectSchema),
				z.lazy(() => PositionWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => PositionWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PositionWhereInputObjectSchema),
				z.lazy(() => PositionWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		company_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		level_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		officer_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		basic_salary: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
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
			.optional(),
		level: z
			.union([
				z.lazy(() => LevelRelationFilterObjectSchema),
				z.lazy(() => LevelWhereInputObjectSchema)
			])
			.optional(),
		officer: z
			.union([
				z.lazy(() => OfficerRelationFilterObjectSchema),
				z.lazy(() => OfficerWhereInputObjectSchema)
			])
			.optional(),
		employees: z.lazy(() => EmployeeListRelationFilterObjectSchema).optional()
	})
	.strict();

export const PositionWhereInputObjectSchema = Schema;
