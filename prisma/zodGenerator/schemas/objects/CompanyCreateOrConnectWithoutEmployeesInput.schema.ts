import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutEmployeesInputObjectSchema } from './CompanyCreateWithoutEmployeesInput.schema';
import { CompanyUncheckedCreateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedCreateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutEmployeesInput> = z
	.object({
		where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => CompanyCreateWithoutEmployeesInputObjectSchema),
			z.lazy(() => CompanyUncheckedCreateWithoutEmployeesInputObjectSchema)
		])
	})
	.strict();

export const CompanyCreateOrConnectWithoutEmployeesInputObjectSchema = Schema;
