import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutPositionInputObjectSchema } from './EmployeeUpdateWithoutPositionInput.schema';
import { EmployeeUncheckedUpdateWithoutPositionInputObjectSchema } from './EmployeeUncheckedUpdateWithoutPositionInput.schema';
import { EmployeeCreateWithoutPositionInputObjectSchema } from './EmployeeCreateWithoutPositionInput.schema';
import { EmployeeUncheckedCreateWithoutPositionInputObjectSchema } from './EmployeeUncheckedCreateWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithWhereUniqueWithoutPositionInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => EmployeeUpdateWithoutPositionInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateWithoutPositionInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutPositionInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutPositionInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpsertWithWhereUniqueWithoutPositionInputObjectSchema = Schema;
