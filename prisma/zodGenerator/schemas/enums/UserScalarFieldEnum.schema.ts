import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
	'id',
	'email',
	'password',
	'role',
	'created_at',
	'updated_at'
]);
