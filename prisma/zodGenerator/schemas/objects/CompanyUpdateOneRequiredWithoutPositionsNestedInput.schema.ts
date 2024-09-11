import { z } from 'zod';
import { CompanyCreateWithoutPositionsInputObjectSchema } from './CompanyCreateWithoutPositionsInput.schema';
import { CompanyUncheckedCreateWithoutPositionsInputObjectSchema } from './CompanyUncheckedCreateWithoutPositionsInput.schema';
import { CompanyCreateOrConnectWithoutPositionsInputObjectSchema } from './CompanyCreateOrConnectWithoutPositionsInput.schema';
import { CompanyUpsertWithoutPositionsInputObjectSchema } from './CompanyUpsertWithoutPositionsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutPositionsInputObjectSchema } from './CompanyUpdateWithoutPositionsInput.schema';
import { CompanyUncheckedUpdateWithoutPositionsInputObjectSchema } from './CompanyUncheckedUpdateWithoutPositionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutPositionsNestedInput> = z
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
		upsert: z.lazy(() => CompanyUpsertWithoutPositionsInputObjectSchema).optional(),
		connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => CompanyUpdateWithoutPositionsInputObjectSchema),
				z.lazy(() => CompanyUncheckedUpdateWithoutPositionsInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const CompanyUpdateOneRequiredWithoutPositionsNestedInputObjectSchema = Schema;
