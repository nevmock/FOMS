import { z } from 'zod';
import { SalaryWhereUniqueInputObjectSchema } from './objects/SalaryWhereUniqueInput.schema';

export const SalaryDeleteOneSchema = z.object({ where: SalaryWhereUniqueInputObjectSchema });
