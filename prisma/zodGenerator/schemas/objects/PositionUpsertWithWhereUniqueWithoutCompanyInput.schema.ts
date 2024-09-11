import { z } from 'zod';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionUpdateWithoutCompanyInputObjectSchema } from './PositionUpdateWithoutCompanyInput.schema';
import { PositionUncheckedUpdateWithoutCompanyInputObjectSchema } from './PositionUncheckedUpdateWithoutCompanyInput.schema';
import { PositionCreateWithoutCompanyInputObjectSchema } from './PositionCreateWithoutCompanyInput.schema';
import { PositionUncheckedCreateWithoutCompanyInputObjectSchema } from './PositionUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpsertWithWhereUniqueWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => PositionWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => PositionUpdateWithoutCompanyInputObjectSchema),
			z.lazy(() => PositionUncheckedUpdateWithoutCompanyInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => PositionCreateWithoutCompanyInputObjectSchema),
			z.lazy(() => PositionUncheckedCreateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const PositionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema = Schema;
