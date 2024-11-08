import { z } from 'zod';
import { SalaryUpdateInputObjectSchema } from './objects/SalaryUpdateInput.schema';
import { SalaryUncheckedUpdateInputObjectSchema } from './objects/SalaryUncheckedUpdateInput.schema';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';

export const SalaryUpdateOneSchema = z.object({
	data: z.union([SalaryUpdateInputObjectSchema, SalaryUncheckedUpdateInputObjectSchema]),
	where: SalaryWhereUniqueInputObjectSchema
});
