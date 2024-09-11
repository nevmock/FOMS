import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EmployeeListRelationFilterObjectSchema } from './EmployeeListRelationFilter.schema';
import { PositionListRelationFilterObjectSchema } from './PositionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => CompanyWhereInputObjectSchema),
				z.lazy(() => CompanyWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => CompanyWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CompanyWhereInputObjectSchema),
				z.lazy(() => CompanyWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		logo_uri: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		employees: z.lazy(() => EmployeeListRelationFilterObjectSchema).optional(),
		positions: z.lazy(() => PositionListRelationFilterObjectSchema).optional()
	})
	.strict();

export const CompanyWhereInputObjectSchema = Schema;
