import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './SalaryWhereUniqueInput.schema';
import { SalaryCreateWithoutEmployeeInputObjectSchema } from './SalaryCreateWithoutEmployeeInput.schema';
import { SalaryUncheckedCreateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryCreateOrConnectWithoutEmployeeInput> = z
	.object({
		where: z.lazy(() => SalaryWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema),
			z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema)
		])
	})
	.strict();

export const SalaryCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
