import { z } from 'zod';
import { SalaryScalarWhereInputObjectSchema } from './SalaryScalarWhereInput.schema';
import { SalaryUpdateManyMutationInputObjectSchema } from './SalaryUpdateManyMutationInput.schema';
import { SalaryUncheckedUpdateManyWithoutSalariesInputObjectSchema } from './SalaryUncheckedUpdateManyWithoutSalariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryUpdateManyWithWhereWithoutEmployeeInput> = z
	.object({
		where: z.lazy(() => SalaryScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => SalaryUpdateManyMutationInputObjectSchema),
			z.lazy(() => SalaryUncheckedUpdateManyWithoutSalariesInputObjectSchema)
		])
	})
	.strict();

export const SalaryUpdateManyWithWhereWithoutEmployeeInputObjectSchema = Schema;
