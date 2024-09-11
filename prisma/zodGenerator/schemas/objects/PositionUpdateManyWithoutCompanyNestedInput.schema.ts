import { z } from 'zod';
import { PositionCreateWithoutCompanyInputObjectSchema } from './PositionCreateWithoutCompanyInput.schema';
import { PositionUncheckedCreateWithoutCompanyInputObjectSchema } from './PositionUncheckedCreateWithoutCompanyInput.schema';
import { PositionCreateOrConnectWithoutCompanyInputObjectSchema } from './PositionCreateOrConnectWithoutCompanyInput.schema';
import { PositionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './PositionUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { PositionCreateManyCompanyInputEnvelopeObjectSchema } from './PositionCreateManyCompanyInputEnvelope.schema';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './PositionUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { PositionUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './PositionUpdateManyWithWhereWithoutCompanyInput.schema';
import { PositionScalarWhereInputObjectSchema } from './PositionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateManyWithoutCompanyNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => PositionCreateWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionCreateWithoutCompanyInputObjectSchema).array(),
				z.lazy(() => PositionUncheckedCreateWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionUncheckedCreateWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => PositionCreateOrConnectWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionCreateOrConnectWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => PositionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => PositionCreateManyCompanyInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => PositionWhereUniqueInputObjectSchema),
				z.lazy(() => PositionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => PositionWhereUniqueInputObjectSchema),
				z.lazy(() => PositionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => PositionWhereUniqueInputObjectSchema),
				z.lazy(() => PositionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => PositionWhereUniqueInputObjectSchema),
				z.lazy(() => PositionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => PositionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => PositionUpdateManyWithWhereWithoutCompanyInputObjectSchema),
				z.lazy(() => PositionUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => PositionScalarWhereInputObjectSchema),
				z.lazy(() => PositionScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const PositionUpdateManyWithoutCompanyNestedInputObjectSchema = Schema;
