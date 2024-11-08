import { z } from 'zod';
import { PositionUpdateWithoutEmployeesInputObjectSchema } from './PositionUpdateWithoutEmployeesInput.schema';
import { PositionUncheckedUpdateWithoutEmployeesInputObjectSchema } from './PositionUncheckedUpdateWithoutEmployeesInput.schema';
import { PositionCreateWithoutEmployeesInputObjectSchema } from './PositionCreateWithoutEmployeesInput.schema';
import { PositionUncheckedCreateWithoutEmployeesInputObjectSchema } from './PositionUncheckedCreateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpsertWithoutEmployeesInput> = z
	.object({
		update: z.union([
			z.lazy(() => PositionUpdateWithoutEmployeesInputObjectSchema),
			z.lazy(() => PositionUncheckedUpdateWithoutEmployeesInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => PositionCreateWithoutEmployeesInputObjectSchema),
			z.lazy(() => PositionUncheckedCreateWithoutEmployeesInputObjectSchema)
		])
	})
	.strict();

export const PositionUpsertWithoutEmployeesInputObjectSchema = Schema;
