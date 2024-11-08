import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutSalariesInputObjectSchema } from './EmployeeCreateWithoutSalariesInput.schema';
import { EmployeeUncheckedCreateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedCreateWithoutSalariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutSalariesInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutSalariesInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutSalariesInputObjectSchema)
		])
	})
	.strict();

export const EmployeeCreateOrConnectWithoutSalariesInputObjectSchema = Schema;
