import { z } from 'zod';
import { SalaryWhereInputObjectSchema } from './objects/SalaryWhereInput.schema';

export const SalaryDeleteManySchema = z.object({ where: SalaryWhereInputObjectSchema.optional() });
