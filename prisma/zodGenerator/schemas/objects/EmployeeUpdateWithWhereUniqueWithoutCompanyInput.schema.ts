import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutCompanyInputObjectSchema } from './EmployeeUpdateWithoutCompanyInput.schema';
import { EmployeeUncheckedUpdateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedUpdateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateWithWhereUniqueWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => EmployeeUpdateWithoutCompanyInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpdateWithWhereUniqueWithoutCompanyInputObjectSchema = Schema;
