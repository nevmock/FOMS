import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './SalaryWhereUniqueInput.schema';
import { SalaryUpdateWithoutEmployeeInputObjectSchema } from './SalaryUpdateWithoutEmployeeInput.schema';
import { SalaryUncheckedUpdateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryUpdateWithWhereUniqueWithoutEmployeeInput> = z
	.object({
		where: z.lazy(() => SalaryWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => SalaryUpdateWithoutEmployeeInputObjectSchema),
			z.lazy(() => SalaryUncheckedUpdateWithoutEmployeeInputObjectSchema)
		])
	})
	.strict();

export const SalaryUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
