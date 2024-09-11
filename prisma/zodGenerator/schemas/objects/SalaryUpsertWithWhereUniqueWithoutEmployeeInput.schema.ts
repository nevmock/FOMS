import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './SalaryWhereUniqueInput.schema';
import { SalaryUpdateWithoutEmployeeInputObjectSchema } from './SalaryUpdateWithoutEmployeeInput.schema';
import { SalaryUncheckedUpdateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedUpdateWithoutEmployeeInput.schema';
import { SalaryCreateWithoutEmployeeInputObjectSchema } from './SalaryCreateWithoutEmployeeInput.schema';
import { SalaryUncheckedCreateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryUpsertWithWhereUniqueWithoutEmployeeInput> = z
	.object({
		where: z.lazy(() => SalaryWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => SalaryUpdateWithoutEmployeeInputObjectSchema),
			z.lazy(() => SalaryUncheckedUpdateWithoutEmployeeInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema),
			z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema)
		])
	})
	.strict();

export const SalaryUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
