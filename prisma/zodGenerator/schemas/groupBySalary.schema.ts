import { z } from 'zod';
import { SalaryWhereInputObjectSchema } from './objects/SalaryWhereInput.schema';
import { SalaryOrderByWithAggregationInputObjectSchema } from './objects/SalaryOrderByWithAggregationInput.schema';
import { SalaryScalarWhereWithAggregatesInputObjectSchema } from './objects/SalaryScalarWhereWithAggregatesInput.schema';
import { SalaryScalarFieldEnumSchema } from './enums/SalaryScalarFieldEnum.schema';

export const SalaryGroupBySchema = z.object({
	where: SalaryWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			SalaryOrderByWithAggregationInputObjectSchema,
			SalaryOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: SalaryScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SalaryScalarFieldEnumSchema)
});
