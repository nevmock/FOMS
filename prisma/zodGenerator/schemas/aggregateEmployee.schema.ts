import { z } from 'zod';
import { EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';
import { EmployeeCountAggregateInputObjectSchema } from './objects/EmployeeCountAggregateInput.schema';
import { EmployeeMinAggregateInputObjectSchema } from './objects/EmployeeMinAggregateInput.schema';
import { EmployeeMaxAggregateInputObjectSchema } from './objects/EmployeeMaxAggregateInput.schema';

export const EmployeeAggregateSchema = z.object({
	orderBy: z
		.union([
			EmployeeOrderByWithRelationInputObjectSchema,
			EmployeeOrderByWithRelationInputObjectSchema.array()
		])
		.optional(),
	where: EmployeeWhereInputObjectSchema.optional(),
	cursor: EmployeeWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), EmployeeCountAggregateInputObjectSchema]).optional(),
	_min: EmployeeMinAggregateInputObjectSchema.optional(),
	_max: EmployeeMaxAggregateInputObjectSchema.optional()
});
