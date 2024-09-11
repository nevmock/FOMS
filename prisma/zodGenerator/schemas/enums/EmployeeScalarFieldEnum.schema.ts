import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum([
	'id',
	'company_id',
	'position_id',
	'nip',
	'name',
	'tmt',
	'gender',
	'created_at',
	'updated_at'
]);
