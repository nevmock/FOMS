import { z } from 'zod';
import { SalaryCreateManyInputObjectSchema } from './objects/SalaryCreateManyInput.schema';

export const SalaryCreateManySchema = z.object({
	data: z.union([SalaryCreateManyInputObjectSchema, z.array(SalaryCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional()
});
