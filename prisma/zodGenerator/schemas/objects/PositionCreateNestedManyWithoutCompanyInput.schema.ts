import { z } from 'zod';
import { PositionCreateWithoutCompanyInputObjectSchema } from './PositionCreateWithoutCompanyInput.schema';
import { PositionUncheckedCreateWithoutCompanyInputObjectSchema } from './PositionUncheckedCreateWithoutCompanyInput.schema';
import { PositionCreateOrConnectWithoutCompanyInputObjectSchema } from './PositionCreateOrConnectWithoutCompanyInput.schema';
import { PositionCreateManyCompanyInputEnvelopeObjectSchema } from './PositionCreateManyCompanyInputEnvelope.schema';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateNestedManyWithoutCompanyInput> = z
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
		createMany: z.lazy(() => PositionCreateManyCompanyInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => PositionWhereUniqueInputObjectSchema),
				z.lazy(() => PositionWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const PositionCreateNestedManyWithoutCompanyInputObjectSchema = Schema;
