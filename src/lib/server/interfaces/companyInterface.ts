import type { Company } from '@prisma/client';
import { OurBaseService } from '$lib/server/core/service'

export interface ICompanyService extends OurBaseService<Company>{
}