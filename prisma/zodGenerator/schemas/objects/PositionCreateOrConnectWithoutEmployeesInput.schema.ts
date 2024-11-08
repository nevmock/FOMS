import { z } from 'zod';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionCreateWithoutEmployeesInputObjectSchema } from './PositionCreateWithoutEmployeesInput.schema';
import { PositionUncheckedCreateWithoutEmployeesInputObjectSchema } from './PositionUncheckedCreateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateOrConnectWithoutEmployeesInput> = z
	.object({
		where: z.lazy(() => PositionWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => PositionCreateWithoutEmployeesInputObjectSchema),
			z.lazy(() => PositionUncheckedCreateWithoutEmployeesInputObjectSchema)
		])
	})
	.strict();

export const PositionCreateOrConnectWithoutEmployeesInputObjectSchema = Schema;
