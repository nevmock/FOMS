import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { EmployeeUpdateManyWithoutCompanyNestedInputObjectSchema } from './EmployeeUpdateManyWithoutCompanyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateWithoutPositionsInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		address: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		code: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		logo_uri: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		created_at: z
			.union([
				z.coerce.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)
			])
			.optional()
			.nullable(),
		updated_at: z
			.union([
				z.coerce.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)
			])
			.optional()
			.nullable(),
		employees: z.lazy(() => EmployeeUpdateManyWithoutCompanyNestedInputObjectSchema).optional()
	})
	.strict();

export const CompanyUpdateWithoutPositionsInputObjectSchema = Schema;
