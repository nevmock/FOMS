import { OurBaseService } from '$lib/server/core/service';
import type { Salary } from '@prisma/client';

export interface ISalaryService extends OurBaseService<Salary> {}
