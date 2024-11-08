import { z } from 'zod';
import { SalaryUpdateManyMutationInputObjectSchema } from './objects/SalaryUpdateManyMutationInput.schema';
import { SalaryWhereInputObjectSchema } from './objects/SalaryWhereInput.schema';

export const SalaryUpdateManySchema = z.object({
	data: SalaryUpdateManyMutationInputObjectSchema,
	where: SalaryWhereInputObjectSchema.optional()
});
