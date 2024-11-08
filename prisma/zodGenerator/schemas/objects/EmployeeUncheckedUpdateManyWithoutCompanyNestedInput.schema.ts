import { z } from 'zod';
import { EmployeeCreateWithoutCompanyInputObjectSchema } from './EmployeeCreateWithoutCompanyInput.schema';
import { EmployeeUncheckedCreateWithoutCompanyInputObjectSchema } from './EmployeeUncheckedCreateWithoutCompanyInput.schema';
import { EmployeeCreateOrConnectWithoutCompanyInputObjectSchema } from './EmployeeCreateOrConnectWithoutCompanyInput.schema';
import { EmployeeUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './EmployeeUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { EmployeeCreateManyCompanyInputEnvelopeObjectSchema } from './EmployeeCreateManyCompanyInputEnvelope.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './EmployeeUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { EmployeeUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './EmployeeUpdateManyWithWhereWithoutCompanyInput.schema';
import { EmployeeScalarWhereInputObjectSchema } from './EmployeeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUncheckedUpdateManyWithoutCompanyNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => EmployeeUpsertWithWhereUniqueWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => EmployeeCreateManyCompanyInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
				z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => EmployeeUpdateWithWhereUniqueWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => EmployeeUpdateManyWithWhereWithoutCompanyInputObjectSchema),
				z.lazy(() => EmployeeUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => EmployeeScalarWhereInputObjectSchema),
				z.lazy(() => EmployeeScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const EmployeeUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema = Schema;
