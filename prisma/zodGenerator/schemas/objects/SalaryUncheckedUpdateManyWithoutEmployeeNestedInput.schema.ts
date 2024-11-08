import { z } from 'zod';
import { SalaryCreateWithoutEmployeeInputObjectSchema } from './SalaryCreateWithoutEmployeeInput.schema';
import { SalaryUncheckedCreateWithoutEmployeeInputObjectSchema } from './SalaryUncheckedCreateWithoutEmployeeInput.schema';
import { SalaryCreateOrConnectWithoutEmployeeInputObjectSchema } from './SalaryCreateOrConnectWithoutEmployeeInput.schema';
import { SalaryUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './SalaryUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { SalaryCreateManyEmployeeInputEnvelopeObjectSchema } from './SalaryCreateManyEmployeeInputEnvelope.schema';
import { SalaryWhereUniqueInputObjectSchema } from './SalaryWhereUniqueInput.schema';
import { SalaryUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './SalaryUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { SalaryUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './SalaryUpdateManyWithWhereWithoutEmployeeInput.schema';
import { SalaryScalarWhereInputObjectSchema } from './SalaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryUncheckedUpdateManyWithoutEmployeeNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryCreateWithoutEmployeeInputObjectSchema).array(),
				z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryUncheckedCreateWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => SalaryCreateOrConnectWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryCreateOrConnectWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => SalaryUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => SalaryCreateManyEmployeeInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => SalaryWhereUniqueInputObjectSchema),
				z.lazy(() => SalaryWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => SalaryWhereUniqueInputObjectSchema),
				z.lazy(() => SalaryWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => SalaryWhereUniqueInputObjectSchema),
				z.lazy(() => SalaryWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => SalaryWhereUniqueInputObjectSchema),
				z.lazy(() => SalaryWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => SalaryUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => SalaryUpdateManyWithWhereWithoutEmployeeInputObjectSchema),
				z.lazy(() => SalaryUpdateManyWithWhereWithoutEmployeeInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => SalaryScalarWhereInputObjectSchema),
				z.lazy(() => SalaryScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const SalaryUncheckedUpdateManyWithoutEmployeeNestedInputObjectSchema = Schema;
