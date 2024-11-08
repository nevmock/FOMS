import { z } from 'zod';
import { CompanyCreateWithoutEmployeesInputObjectSchema } from './CompanyCreateWithoutEmployeesInput.schema';
import { CompanyUncheckedCreateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedCreateWithoutEmployeesInput.schema';
import { CompanyCreateOrConnectWithoutEmployeesInputObjectSchema } from './CompanyCreateOrConnectWithoutEmployeesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutEmployeesInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => CompanyCreateWithoutEmployeesInputObjectSchema),
				z.lazy(() => CompanyUncheckedCreateWithoutEmployeesInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => CompanyCreateOrConnectWithoutEmployeesInputObjectSchema)
			.optional(),
		connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const CompanyCreateNestedOneWithoutEmployeesInputObjectSchema = Schema;
