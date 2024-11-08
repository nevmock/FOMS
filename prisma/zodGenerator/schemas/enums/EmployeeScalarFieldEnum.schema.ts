import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum([
	'id',
	'company_id',
	'position_id',
	'nip',
	'name',
	'tmt',
	'gender',
	'whatsapp_number',
	'email',
	'created_at',
	'updated_at'
]);
