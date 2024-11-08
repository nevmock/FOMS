import { z } from 'zod';
import { EmployeeCreateWithoutPositionInputObjectSchema } from './EmployeeCreateWithoutPositionInput.schema';
import { EmployeeUncheckedCreateWithoutPositionInputObjectSchema } from './EmployeeUncheckedCreateWithoutPositionInput.schema';
import { EmployeeCreateOrConnectWithoutPositionInputObjectSchema } from './EmployeeCreateOrConnectWithoutPositionInput.schema';
import { EmployeeUpsertWithWhereUniqueWithoutPositionInputObjectSchema } from './EmployeeUpsertWithWhereUniqueWithoutPositionInput.schema';
import { EmployeeCreateManyPositionInputEnvelopeObjectSchema } from './EmployeeCreateManyPositionInputEnvelope.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithWhereUniqueWithoutPositionInputObjectSchema } from './EmployeeUpdateWithWhereUniqueWithoutPositionInput.schema';
import { EmployeeUpdateManyWithWhereWithoutPositionInputObjectSchema } from './EmployeeUpdateManyWithWhereWithoutPositionInput.schema';
import { EmployeeScalarWhereInputObjectSchema } from './EmployeeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateManyWithoutPositionNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => EmployeeUpsertWithWhereUniqueWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeUpsertWithWhereUniqueWithoutPositionInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => EmployeeCreateManyPositionInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => EmployeeUpdateWithWhereUniqueWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeUpdateWithWhereUniqueWithoutPositionInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => EmployeeUpdateManyWithWhereWithoutPositionInputObjectSchema),
				z.lazy(() => EmployeeUpdateManyWithWhereWithoutPositionInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => EmployeeScalarWhereInputObjectSchema),
				z.lazy(() => EmployeeScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const EmployeeUpdateManyWithoutPositionNestedInputObjectSchema = Schema;
