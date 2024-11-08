import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutCompanyInputObjectSchema } from './EmployeeCreateWithoutCompanyInput.schema';
import { EmployeeUncheckedCreateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutCompanyInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const EmployeeCreateOrConnectWithoutCompanyInputObjectSchema = Schema;
