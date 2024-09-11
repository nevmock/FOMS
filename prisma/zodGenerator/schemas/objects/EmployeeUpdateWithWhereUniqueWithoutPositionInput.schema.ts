import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutPositionInputObjectSchema } from './EmployeeUpdateWithoutPositionInput.schema';
import { EmployeeUncheckedUpdateWithoutPositionInputObjectSchema } from './EmployeeUncheckedUpdateWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateWithWhereUniqueWithoutPositionInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => EmployeeUpdateWithoutPositionInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateWithoutPositionInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpdateWithWhereUniqueWithoutPositionInputObjectSchema = Schema;
