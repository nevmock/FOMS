import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutPositionsInputObjectSchema } from './CompanyCreateWithoutPositionsInput.schema';
import { CompanyUncheckedCreateWithoutPositionsInputObjectSchema } from './CompanyUncheckedCreateWithoutPositionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutPositionsInput> = z
	.object({
		where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => CompanyCreateWithoutPositionsInputObjectSchema),
			z.lazy(() => CompanyUncheckedCreateWithoutPositionsInputObjectSchema)
		])
	})
	.strict();

export const CompanyCreateOrConnectWithoutPositionsInputObjectSchema = Schema;
