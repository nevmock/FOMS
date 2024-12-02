import type { Level, Officer } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { officerSchema } from '$lib/server/schema/officer';
import type { TGetDetail } from '$lib/server/types/ServiceLayer';
class OfficerService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<Array<Officer> | null> => {
		try {
			const search = payload?.search ? JSON.parse(payload?.search) : null;
			const results = await prisma.officer.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search?.toLowerCase()
									}
								}
								// {
								// 	level: {
								// 		contains: search?.level
								// 	}
								// },
								// {
								// 	officer: {
								// 		contains: search?.officer
								// 	}
								// },
								// {
								// 	basic_salary: {
								// 		contains: parseFloat(search?.basicSalary)
								// 	}
								// }
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

	public getDetail = async (id: string): Promise<TGetDetail<Officer> | null> => {
		return await prisma.officer.findUnique({
			where: {
				id: id
			}
			// include: {
			// 	employees: true,
			// 	positions: true
			// }
		});
	};

	public save = async (payload: officerSchema) => {
		try {
			let records: Level | null = null;
			if (payload.id && payload.id !== '' && payload.id !== null) {
				records = await prisma.officer.update({
					where: {
						id: payload.id
					},
					data: {
						position_id: payload.positionId,
						name: payload.name
					}
				});
			} else {
				records = await prisma.officer.create({
					data: {
						position_id: payload.positionId,
						name: payload.name
					}
				});
			}

			return {
				data: records,
				recordsTotal: JSON.parse(JSON.stringify(records)).length || 0
			};
		} catch (e: unknown) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.officer.delete({
			where: {
				id: id
			}
		});
	};
}

export default OfficerService;
