import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CompanyUpdateOneWithoutEmployeesNestedInputObjectSchema } from './CompanyUpdateOneWithoutEmployeesNestedInput.schema';
import { PositionUpdateOneWithoutEmployeesNestedInputObjectSchema } from './PositionUpdateOneWithoutEmployeesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateWithoutSalariesInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		nip: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		tmt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		gender: z
			.union([
				z.lazy(() => GenderSchema),
				z.lazy(() => EnumGenderFieldUpdateOperationsInputObjectSchema)
			])
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
		company: z.lazy(() => CompanyUpdateOneWithoutEmployeesNestedInputObjectSchema).optional(),
		position: z.lazy(() => PositionUpdateOneWithoutEmployeesNestedInputObjectSchema).optional()
	})
	.strict();

export const EmployeeUpdateWithoutSalariesInputObjectSchema = Schema;
