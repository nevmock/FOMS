import { z } from 'zod';
import { SalaryOrderByWithRelationInputObjectSchema } from './objects/SalaryOrderByWithRelationInput.schema';
import { SalaryWhereInputObjectSchema } from './objects/SalaryWhereInput.schema';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';
import { SalaryCountAggregateInputObjectSchema } from './objects/SalaryCountAggregateInput.schema';
import { SalaryMinAggregateInputObjectSchema } from './objects/SalaryMinAggregateInput.schema';
import { SalaryMaxAggregateInputObjectSchema } from './objects/SalaryMaxAggregateInput.schema';
import { SalaryAvgAggregateInputObjectSchema } from './objects/SalaryAvgAggregateInput.schema';
import { SalarySumAggregateInputObjectSchema } from './objects/SalarySumAggregateInput.schema';

export const SalaryAggregateSchema = z.object({
	orderBy: z
		.union([
			SalaryOrderByWithRelationInputObjectSchema,
			SalaryOrderByWithRelationInputObjectSchema.array()
		])
		.optional(),
	where: SalaryWhereInputObjectSchema.optional(),
	cursor: SalaryWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), SalaryCountAggregateInputObjectSchema]).optional(),
	_min: SalaryMinAggregateInputObjectSchema.optional(),
	_max: SalaryMaxAggregateInputObjectSchema.optional(),
	_avg: SalaryAvgAggregateInputObjectSchema.optional(),
	_sum: SalarySumAggregateInputObjectSchema.optional()
});
