import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutPositionInputObjectSchema } from './EmployeeCreateWithoutPositionInput.schema';
import { EmployeeUncheckedCreateWithoutPositionInputObjectSchema } from './EmployeeUncheckedCreateWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutPositionInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutPositionInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutPositionInputObjectSchema)
		])
	})
	.strict();

export const EmployeeCreateOrConnectWithoutPositionInputObjectSchema = Schema;
