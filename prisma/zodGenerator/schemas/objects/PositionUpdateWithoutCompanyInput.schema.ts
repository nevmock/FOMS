import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { LevelUpdateOneRequiredWithoutPositionsNestedInputObjectSchema } from './LevelUpdateOneRequiredWithoutPositionsNestedInput.schema';
import { OfficerUpdateOneRequiredWithoutPositionsNestedInputObjectSchema } from './OfficerUpdateOneRequiredWithoutPositionsNestedInput.schema';
import { EmployeeUpdateManyWithoutPositionNestedInputObjectSchema } from './EmployeeUpdateManyWithoutPositionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUpdateWithoutCompanyInput> = z
	.object({
		id: z
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
		level: z.lazy(() => LevelUpdateOneRequiredWithoutPositionsNestedInputObjectSchema).optional(),
		officer: z
			.lazy(() => OfficerUpdateOneRequiredWithoutPositionsNestedInputObjectSchema)
			.optional(),
		employees: z.lazy(() => EmployeeUpdateManyWithoutPositionNestedInputObjectSchema).optional()
	})
	.strict();

export const PositionUpdateWithoutCompanyInputObjectSchema = Schema;
