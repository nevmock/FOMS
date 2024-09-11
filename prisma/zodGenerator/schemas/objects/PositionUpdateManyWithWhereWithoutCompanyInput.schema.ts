import { z } from 'zod';
import { PositionScalarWhereInputObjectSchema } from './PositionScalarWhereInput.schema';
import { PositionUpdateManyMutationInputObjectSchema } from './PositionUpdateManyMutationInput.schema';
import { PositionUncheckedUpdateManyWithoutPositionsInputObjectSchema } from './PositionUncheckedUpdateManyWithoutPositionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateManyWithWhereWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => PositionScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => PositionUpdateManyMutationInputObjectSchema),
			z.lazy(() => PositionUncheckedUpdateManyWithoutPositionsInputObjectSchema)
		])
	})
	.strict();

export const PositionUpdateManyWithWhereWithoutCompanyInputObjectSchema = Schema;
