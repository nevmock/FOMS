import { z } from 'zod';
import { CompanyCreateWithoutEmployeesInputObjectSchema } from './CompanyCreateWithoutEmployeesInput.schema';
import { CompanyUncheckedCreateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedCreateWithoutEmployeesInput.schema';
import { CompanyCreateOrConnectWithoutEmployeesInputObjectSchema } from './CompanyCreateOrConnectWithoutEmployeesInput.schema';
import { CompanyUpsertWithoutEmployeesInputObjectSchema } from './CompanyUpsertWithoutEmployeesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutEmployeesInputObjectSchema } from './CompanyUpdateWithoutEmployeesInput.schema';
import { CompanyUncheckedUpdateWithoutEmployeesInputObjectSchema } from './CompanyUncheckedUpdateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateOneWithoutEmployeesNestedInput> = z
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
		upsert: z.lazy(() => CompanyUpsertWithoutEmployeesInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => CompanyUpdateWithoutEmployeesInputObjectSchema),
				z.lazy(() => CompanyUncheckedUpdateWithoutEmployeesInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const CompanyUpdateOneWithoutEmployeesNestedInputObjectSchema = Schema;
