import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import type { ISalaryService } from '$lib/server/interfaces/salaryInterface';
import type { Salary } from '@prisma/client';
class SaralryService implements ISalaryService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<Array<Salary> | null> => {
		try {
			const search = payload?.search ? JSON.parse(payload?.search) : null;
			const results = await prisma.position.findMany({
				where: payload.search
					? {
							OR: [
								{
									month_salary: {
										contains: search?.monthSalary
									}
								},
								{
									position_allowance: {
										contains: parseFloat(search?.positionAllowance)
									}
								},
								{
									bpjs_allowance: {
										contains: search?.bpjsAllowance
									}
								},
								{
									tax_allowance: {
										contains: parseFloat(search?.taxAllowance)
									}
								},
								{
									other_allowance: {
										contains: search?.otherAllowance
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

	public getDetail = async (id: string): Promise<Salary> => {
		return await prisma.position.findUnique({
			where: {
				id: id
			}
			// include: {
			// 	employees: true,
			// 	positions: true
			// }
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
						level: payload.level,
						officer: payload.officer,
						basic_salary: parseFloat(payload.basicSalary)
					}
				});
			} else {
				return await prisma.position.create({
					data: {
						company_id: payload.companyId,
						level: payload.level,
						officer: payload.officer,
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

export default SaralryService;
