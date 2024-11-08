import { z } from 'zod';
import { EmployeeCreateWithoutPositionInputObjectSchema } from './EmployeeCreateWithoutPositionInput.schema';
import { EmployeeUncheckedCreateWithoutPositionInputObjectSchema } from './EmployeeUncheckedCreateWithoutPositionInput.schema';
import { EmployeeCreateOrConnectWithoutPositionInputObjectSchema } from './EmployeeCreateOrConnectWithoutPositionInput.schema';
import { EmployeeCreateManyPositionInputEnvelopeObjectSchema } from './EmployeeCreateManyPositionInputEnvelope.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedManyWithoutPositionInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => EmployeeCreateWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeCreateWithoutPositionInputObjectSchema).array(),
				z.lazy(() => EmployeeUncheckedCreateWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeUncheckedCreateWithoutPositionInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => EmployeeCreateOrConnectWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeCreateOrConnectWithoutPositionInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => EmployeeCreateManyPositionInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const EmployeeCreateNestedManyWithoutPositionInputObjectSchema = Schema;
