import { z } from 'zod';

export const PositionScalarFieldEnumSchema = z.enum([
	'id',
	'company_id',
	'level_id',
	'officer_id',
	'basic_salary',
	'created_at',
	'updated_at'
]);
