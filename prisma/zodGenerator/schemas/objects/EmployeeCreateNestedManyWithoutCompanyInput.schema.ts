import { z } from 'zod';
import { EmployeeCreateWithoutCompanyInputObjectSchema } from './EmployeeCreateWithoutCompanyInput.schema';
import { EmployeeUncheckedCreateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedCreateWithoutCompanyInput.schema';
import { EmployeeCreateOrConnectWithoutCompanyInputObjectSchema } from './EmployeeCreateOrConnectWithoutCompanyInput.schema';
import { EmployeeCreateManyCompanyInputEnvelopeObjectSchema } from './EmployeeCreateManyCompanyInputEnvelope.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedManyWithoutCompanyInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => EmployeeCreateWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeCreateWithoutCompanyInputObjectSchema).array(),
				z.lazy(() => EmployeeUncheckedCreateWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeUncheckedCreateWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => EmployeeCreateOrConnectWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeCreateOrConnectWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => EmployeeCreateManyCompanyInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const EmployeeCreateNestedManyWithoutCompanyInputObjectSchema = Schema;
