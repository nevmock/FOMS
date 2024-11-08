import { z } from 'zod';

export const SalaryScalarFieldEnumSchema = z.enum([
	'id',
	'employee_id',
	'month_salary',
	'position_allowance',
	'bjps_allowance',
	'tax_allowance',
	'other_allowance',
	'position_deduction',
	'bpjs_deduction',
	'tax_deduction',
	'other_deduction',
	'created_at',
	'updated_at'
]);
