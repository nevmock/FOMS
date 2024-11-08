import { z } from 'zod';
import { EmployeeCreateWithoutSalariesInputObjectSchema } from './EmployeeCreateWithoutSalariesInput.schema';
import { EmployeeUncheckedCreateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedCreateWithoutSalariesInput.schema';
import { EmployeeCreateOrConnectWithoutSalariesInputObjectSchema } from './EmployeeCreateOrConnectWithoutSalariesInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutSalariesInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => EmployeeCreateWithoutSalariesInputObjectSchema),
				z.lazy(() => EmployeeUncheckedCreateWithoutSalariesInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => EmployeeCreateOrConnectWithoutSalariesInputObjectSchema)
			.optional(),
		connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const EmployeeCreateNestedOneWithoutSalariesInputObjectSchema = Schema;
