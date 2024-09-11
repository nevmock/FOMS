import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CompanyUpdateOneRequiredWithoutPositionsNestedInputObjectSchema } from './CompanyUpdateOneRequiredWithoutPositionsNestedInput.schema';
import { EmployeeUpdateManyWithoutPositionNestedInputObjectSchema } from './EmployeeUpdateManyWithoutPositionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		level: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		officer: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		basic_salary: z
			.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)])
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
		company: z
			.lazy(() => CompanyUpdateOneRequiredWithoutPositionsNestedInputObjectSchema)
			.optional(),
		employees: z.lazy(() => EmployeeUpdateManyWithoutPositionNestedInputObjectSchema).optional()
	})
	.strict();

export const PositionUpdateInputObjectSchema = Schema;
