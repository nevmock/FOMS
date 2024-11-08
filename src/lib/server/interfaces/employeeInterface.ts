import type { Employee } from '@prisma/client';
import { OurBaseService } from '$lib/server/core/service';

export interface IEmployeeService extends OurBaseService<Employee> {}
