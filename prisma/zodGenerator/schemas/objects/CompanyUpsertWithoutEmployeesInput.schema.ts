import { z } from 'zod';
import { CompanyUpdateWithoutEmployeesInputObjectSchema } from './CompanyUpdateWithoutEmployeesInput.schema';
import { CompanyUncheckedUpdateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedUpdateWithoutEmployeesInput.schema';
import { CompanyCreateWithoutEmployeesInputObjectSchema } from './CompanyCreateWithoutEmployeesInput.schema';
import { CompanyUncheckedCreateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedCreateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpsertWithoutEmployeesInput> = z
	.object({
		update: z.union([
			z.lazy(() => CompanyUpdateWithoutEmployeesInputObjectSchema),
			z.lazy(() => CompanyUncheckedUpdateWithoutEmployeesInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => CompanyCreateWithoutEmployeesInputObjectSchema),
			z.lazy(() => CompanyUncheckedCreateWithoutEmployeesInputObjectSchema)
		])
	})
	.strict();

export const CompanyUpsertWithoutEmployeesInputObjectSchema = Schema;
