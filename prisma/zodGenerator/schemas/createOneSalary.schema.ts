import { z } from 'zod';
import { SalaryCreateInputObjectSchema } from './objects/SalaryCreateInput.schema';
import { SalaryUncheckedCreateInputObjectSchema } from './objects/SalaryUncheckedCreateInput.schema';

export const SalaryCreateOneSchema = z.object({
	data: z.union([SalaryCreateInputObjectSchema, SalaryUncheckedCreateInputObjectSchema])
});
