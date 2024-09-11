import { z } from 'zod';
import { PositionCreateWithoutEmployeesInputObjectSchema } from './PositionCreateWithoutEmployeesInput.schema';
import { PositionUncheckedCreateWithoutEmployeesInputObjectSchema } from './PositionUncheckedCreateWithoutEmployeesInput.schema';
import { PositionCreateOrConnectWithoutEmployeesInputObjectSchema } from './PositionCreateOrConnectWithoutEmployeesInput.schema';
import { PositionUpsertWithoutEmployeesInputObjectSchema } from './PositionUpsertWithoutEmployeesInput.schema';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionUpdateWithoutEmployeesInputObjectSchema } from './PositionUpdateWithoutEmployeesInput.schema';
import { PositionUncheckedUpdateWithoutEmployeesInputObjectSchema } from './PositionUncheckedUpdateWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateOneWithoutEmployeesNestedInput> = z
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
		upsert: z.lazy(() => PositionUpsertWithoutEmployeesInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => PositionWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => PositionUpdateWithoutEmployeesInputObjectSchema),
				z.lazy(() => PositionUncheckedUpdateWithoutEmployeesInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const PositionUpdateOneWithoutEmployeesNestedInputObjectSchema = Schema;
