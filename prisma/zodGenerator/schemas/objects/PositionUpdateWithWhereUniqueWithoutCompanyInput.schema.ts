import { z } from 'zod';
import { PositionWhereUniqueInputObjectSchema } from './PositionWhereUniqueInput.schema';
import { PositionUpdateWithoutCompanyInputObjectSchema } from './PositionUpdateWithoutCompanyInput.schema';
import { PositionUncheckedUpdateWithoutCompanyInputObjectSchema } from './PositionUncheckedUpdateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateWithWhereUniqueWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => PositionWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => PositionUpdateWithoutCompanyInputObjectSchema),
			z.lazy(() => PositionUncheckedUpdateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const PositionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema = Schema;
