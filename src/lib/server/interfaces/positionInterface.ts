import type { Position } from '@prisma/client';
import { OurBaseService } from '$lib/server/core/service';

export interface IPositionService extends OurBaseService<Position> {}
