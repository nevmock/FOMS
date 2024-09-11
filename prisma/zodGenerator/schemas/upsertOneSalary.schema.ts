import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';
import { SalaryCreateInputObjectSchema } from './objects/SalaryCreateInput.schema';
import { SalaryUncheckedCreateInputObjectSchema } from './objects/SalaryUncheckedCreateInput.schema';
import { SalaryUpdateInputObjectSchema } from './objects/SalaryUpdateInput.schema';
import { SalaryUncheckedUpdateInputObjectSchema } from './objects/SalaryUncheckedUpdateInput.schema';

export const SalaryUpsertSchema = z.object({
	where: SalaryWhereUniqueInputObjectSchema,
	create: z.union([SalaryCreateInputObjectSchema, SalaryUncheckedCreateInputObjectSchema]),
	update: z.union([SalaryUpdateInputObjectSchema, SalaryUncheckedUpdateInputObjectSchema])
});
