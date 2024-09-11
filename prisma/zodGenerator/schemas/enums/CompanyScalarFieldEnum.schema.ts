import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'address',
	'code',
	'logo_uri',
	'created_at',
	'updated_at'
]);
