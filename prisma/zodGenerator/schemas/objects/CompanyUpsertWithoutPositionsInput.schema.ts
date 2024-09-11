import { z } from 'zod';
import { CompanyUpdateWithoutPositionsInputObjectSchema } from './CompanyUpdateWithoutPositionsInput.schema';
import { CompanyUncheckedUpdateWithoutPositionsInputObjectSchema } from './CompanyUncheckedUpdateWithoutPositionsInput.schema';
import { CompanyCreateWithoutPositionsInputObjectSchema } from './CompanyCreateWithoutPositionsInput.schema';
import { CompanyUncheckedCreateWithoutPositionsInputObjectSchema } from './CompanyUncheckedCreateWithoutPositionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpsertWithoutPositionsInput> = z
	.object({
		update: z.union([
			z.lazy(() => CompanyUpdateWithoutPositionsInputObjectSchema),
			z.lazy(() => CompanyUncheckedUpdateWithoutPositionsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => CompanyCreateWithoutPositionsInputObjectSchema),
			z.lazy(() => CompanyUncheckedCreateWithoutPositionsInputObjectSchema)
		])
	})
	.strict();

export const CompanyUpsertWithoutPositionsInputObjectSchema = Schema;
