import { z } from 'zod';
import { EmployeeCreateWithoutSalariesInputObjectSchema } from './EmployeeCreateWithoutSalariesInput.schema';
import { EmployeeUncheckedCreateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedCreateWithoutSalariesInput.schema';
import { EmployeeCreateOrConnectWithoutSalariesInputObjectSchema } from './EmployeeCreateOrConnectWithoutSalariesInput.schema';
import { EmployeeUpsertWithoutSalariesInputObjectSchema } from './EmployeeUpsertWithoutSalariesInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutSalariesInputObjectSchema } from './EmployeeUpdateWithoutSalariesInput.schema';
import { EmployeeUncheckedUpdateWithoutSalariesInputObjectSchema } from './EmployeeUncheckedUpdateWithoutSalariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutSalariesNestedInput> = z
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
		upsert: z.lazy(() => EmployeeUpsertWithoutSalariesInputObjectSchema).optional(),
		connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => EmployeeUpdateWithoutSalariesInputObjectSchema),
				z.lazy(() => EmployeeUncheckedUpdateWithoutSalariesInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const EmployeeUpdateOneRequiredWithoutSalariesNestedInputObjectSchema = Schema;
