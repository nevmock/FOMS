import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';

export const SalaryFindUniqueSchema = z.object({ where: SalaryWhereUniqueInputObjectSchema });
