import { z } from 'zod';
import { SalaryCreateWithoutEmployeeInputObjectSchema } from './SalaryCreateWithoutEmployeeInput.schema';
import { SalaryUncheckedCreateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedCreateWithoutEmployeeInput.schema';
import { SalaryCreateOrConnectWithoutEmployeeInputObjectSchema } from './SalaryCreateOrConnectWithoutEmployeeInput.schema';
import { SalaryCreateManyEmployeeInputEnvelopeObjectSchema } from './SalaryCreateManyEmployeeInputEnvelope.schema';
import { SalaryWhereUniqueInputObjectSchema } from './SalaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryCreateNestedManyWithoutEmployeeInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema).array(),
				z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => SalaryCreateOrConnectWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryCreateOrConnectWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => SalaryCreateManyEmployeeInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => SalaryWhereUniqueInputObjectSchema),
				z.lazy(() => SalaryWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const SalaryCreateNestedManyWithoutEmployeeInputObjectSchema = Schema;
