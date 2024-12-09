import type { Company, Level } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { levelSchema } from '$lib/server/schema/level';
import type { TGetAll, TGetDetail } from '$lib/server/types/ServiceLayer';
class LevelService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<TGetAll<Level> | null> => {
		try {
			const result: TGetAll<Level> | null = { data: null, recordsTotal: 0 };

			const search = payload?.search;

			const records = await prisma.level.findMany({
				where: payload.search
					? {
							OR: [
								// {
								// 	name: {
								// 		contains: search.toLowerCase()
								// 	}
								// }
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
				skip: parseInt(String(payload.start)) - 1 || 0,
				take: parseInt(String(payload.length)) || this.DEFAULT_SIZE,
				orderBy: {
					created_at: payload.order || 'desc'
				}
			});

			const recordsTotal = await prisma.level.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search.toLowerCase()
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
					: undefined
			});

			result.data = records;
			result.recordsTotal = recordsTotal.length || 0;

			return result;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<TGetDetail<Level>> => {
		const records = await prisma.detailPosition.findUnique({
			where: {
				id: id
			}
			// include: {
			// 	employees: true,
			// 	positions: true
			// }
		});

		return {
			data: records,
			recordsTotal: records.length || 0
		};
	};

	public save = async (payload: levelSchema): Promise<TGetDetail<Level> | null> => {
		try {
			let records: Level | null = null;
			if (payload.id && payload.id !== '' && payload.id !== null) {
				records = await prisma.level.update({
					where: {
						id: payload.id
					},
					data: {
						name: payload.name
					}
				});
			} else {
				records = await prisma.level.create({
					data: {
						name: payload.name
					}
				});
			}

			return { data: records, recordsTotal: JSON.parse(JSON.stringify(records)).length || 0 };
		} catch (e: unknown) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.level.delete({
			where: {
				id: id
			}
		});
	};
}

export default LevelService;
