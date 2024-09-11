import { z } from 'zod';
import { CompanyCreateWithoutPositionsInputObjectSchema } from './CompanyCreateWithoutPositionsInput.schema';
import { CompanyUncheckedCreateWithoutPositionsInputObjectSchema } from './CompanyUncheckedCreateWithoutPositionsInput.schema';
import { CompanyCreateOrConnectWithoutPositionsInputObjectSchema } from './CompanyCreateOrConnectWithoutPositionsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutPositionsInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => CompanyCreateWithoutPositionsInputObjectSchema),
				z.lazy(() => CompanyUncheckedCreateWithoutPositionsInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => CompanyCreateOrConnectWithoutPositionsInputObjectSchema)
			.optional(),
		connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const CompanyCreateNestedOneWithoutPositionsInputObjectSchema = Schema;
