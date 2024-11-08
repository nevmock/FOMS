import { z } from 'zod';
import { SalaryOrderByWithRelationInputObjectSchema } from './objects/SalaryOrderByWithRelationInput.schema';
import { SalaryWhereInputObjectSchema } from './objects/SalaryWhereInput.schema';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';
import { SalaryScalarFieldEnumSchema } from './enums/SalaryScalarFieldEnum.schema';

export const SalaryFindFirstSchema = z.object({
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
	distinct: z.array(SalaryScalarFieldEnumSchema).optional()
});
