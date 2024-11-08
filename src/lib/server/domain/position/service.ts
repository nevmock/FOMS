import type { IPositionService } from '$lib/server/interfaces/positionInterface';
import type { Position } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { positionSchema } from '$lib/server/schema/position';
class PositionService implements IPositionService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<Array<Position> | null> => {
		try {
			const search = payload?.search ? JSON.parse(payload?.search) : null;
			const results = await prisma.position.findMany({
				where: payload.search
					? {
							OR: [
								// {
								// 	company_id: {
								// 		contains: search?.companyId
								// 	}
								// },
								// {
								// 	level_id: {
								// 		contains: search?.level_id
								// 	}
								// },
								// {
								// 	officer: {
								// 		contains: search?.officer
								// 	}
								// },
								{
									basic_salary: {
										contains: parseFloat(search?.basicSalary)
									}
								}
							]
						}
					: undefined,
				skip: payload.start ?? 0,
				take: payload.length ?? this.DEFAULT_SIZE,
				orderBy: {
					created_at: 'desc'
				}
			});

			return results.length > 0 ? results : null;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<Position> => {
		return await prisma.position.findUnique({
			where: {
				id: id
			},
			include: {
				level: true,
				officer: true
			}
		});
	};

	public save = async (payload: positionSchema) => {
		try {
			if (payload.id && payload.id !== '' && payload.id !== null) {
				return await prisma.position.update({
					where: {
						id: payload.id
					},
					data: {
						company_id: payload.companyId,
						level_id: payload.levelId,
						officer_id: payload.officerId,
						basic_salary: parseFloat(payload.basicSalary)
					}
				});
			} else {
				return await prisma.position.create({
					data: {
						company_id: payload.companyId,
						level_id: payload.levelId,
						officer_id: payload.officerId,
						basic_salary: parseFloat(payload.basicSalary)
					}
				});
			}
		} catch (e: unknown) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.position.delete({
			where: {
				id: id
			}
		});
	};
}

export default PositionService;
