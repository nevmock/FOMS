import { z } from 'zod';
import { EmployeeUpdateWithoutSalariesInputObjectSchema } from './EmployeeUpdateWithoutSalariesInput.schema';
import { EmployeeUncheckedUpdateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedUpdateWithoutSalariesInput.schema';
import { EmployeeCreateWithoutSalariesInputObjectSchema } from './EmployeeCreateWithoutSalariesInput.schema';
import { EmployeeUncheckedCreateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedCreateWithoutSalariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithoutSalariesInput> = z
	.object({
		update: z.union([
			z.lazy(() => EmployeeUpdateWithoutSalariesInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateWithoutSalariesInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutSalariesInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutSalariesInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpsertWithoutSalariesInputObjectSchema = Schema;
