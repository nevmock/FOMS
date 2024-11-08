import { z } from 'zod';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionCreateWithoutCompanyInputObjectSchema } from './PositionCreateWithoutCompanyInput.schema';
import { PositionUncheckedCreateWithoutCompanyInputObjectSchema } from './PositionUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateOrConnectWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => PositionWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => PositionCreateWithoutCompanyInputObjectSchema),
			z.lazy(() => PositionUncheckedCreateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const PositionCreateOrConnectWithoutCompanyInputObjectSchema = Schema;
