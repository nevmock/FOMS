import { z } from 'zod';
import { EmployeeScalarWhereInputObjectSchema } from './EmployeeScalarWhereInput.schema';
import { EmployeeUpdateManyMutationInputObjectSchema } from './EmployeeUpdateManyMutationInput.schema';
import { EmployeeUncheckedUpdateManyWithoutEmployeesInputObjectSchema } from './EmployeeUncheckedUpdateManyWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateManyWithWhereWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => EmployeeScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => EmployeeUpdateManyMutationInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateManyWithoutEmployeesInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpdateManyWithWhereWithoutCompanyInputObjectSchema = Schema;
