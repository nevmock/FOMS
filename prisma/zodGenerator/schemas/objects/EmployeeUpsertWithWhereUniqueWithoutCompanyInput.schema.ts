import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutCompanyInputObjectSchema } from './EmployeeUpdateWithoutCompanyInput.schema';
import { EmployeeUncheckedUpdateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedUpdateWithoutCompanyInput.schema';
import { EmployeeCreateWithoutCompanyInputObjectSchema } from './EmployeeCreateWithoutCompanyInput.schema';
import { EmployeeUncheckedCreateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithWhereUniqueWithoutCompanyInput> = z
	.object({
		where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => EmployeeUpdateWithoutCompanyInputObjectSchema),
			z.lazy(() => EmployeeUncheckedUpdateWithoutCompanyInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => EmployeeCreateWithoutCompanyInputObjectSchema),
			z.lazy(() => EmployeeUncheckedCreateWithoutCompanyInputObjectSchema)
		])
	})
	.strict();

export const EmployeeUpsertWithWhereUniqueWithoutCompanyInputObjectSchema = Schema;
