import { z } from 'zod';
import { PositionCreateWithoutEmployeesInputObjectSchema } from './PositionCreateWithoutEmployeesInput.schema';
import { PositionUncheckedCreateWithoutEmployeesInputObjectSchema } from './PositionUncheckedCreateWithoutEmployeesInput.schema';
import { PositionCreateOrConnectWithoutEmployeesInputObjectSchema } from './PositionCreateOrConnectWithoutEmployeesInput.schema';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateNestedOneWithoutEmployeesInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => PositionCreateWithoutEmployeesInputObjectSchema),
				z.lazy(() => PositionUncheckedCreateWithoutEmployeesInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => PositionCreateOrConnectWithoutEmployeesInputObjectSchema)
			.optional(),
		connect: z.lazy(() => PositionWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const PositionCreateNestedOneWithoutEmployeesInputObjectSchema = Schema;
