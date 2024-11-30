import type { ICompanyService } from '$lib/server/interfaces/companyInterface';
import type { Company } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
class CompanyService implements ICompanyService {
	private DEFAULT_SIZE = 5;
	public getAll = async (
		payload: OurPayload
	): Promise<{ data: Array<Company> | null; recordsTotal: number }> => {
		try {
			const result: { data: Array<Company> | null; recordsTotal: number } = {
				data: null,
				recordsTotal: 0
			};
			const search = payload?.search;
			const records = await prisma.company.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search.toLowerCase()
									}
								},
								{
									address: {
										contains: search.toLowerCase()
									}
								},
								{
									code: {
										contains: search.toLowerCase()
									}
								}
							]
						}
					: undefined,
				skip: parseInt(String(payload.start)) || 0,
				take: parseInt(String(payload.length)) || this.DEFAULT_SIZE,
				orderBy: {
					created_at: payload.order || 'desc'
				},
				include: {
					// employees: true,
					positions: true
				}
			});

			const recordsTotal = await prisma.company.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search.toLowerCase()
									}
								},
								{
									address: {
										contains: search.toLowerCase()
									}
								},
								{
									code: {
										contains: search.toLowerCase()
									}
								}
							]
						}
					: undefined,
				orderBy: {
					created_at: payload.order || 'desc'
				},
				include: {
					// employees: true,
					positions: true
				}
			});

			result.data = records;
			result.recordsTotal = recordsTotal.length || 0;

			return result;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<Company> => {
		return await prisma.company.findUnique({
			where: {
				id: id
			},
			include: {
				// employees: true,
				positions: true
			}
		});
	};

	public save = async (payload: Company) => {
		if (payload.id && payload.id !== '' && payload.id !== null) {
			return await prisma.company.update({
				where: {
					id: payload.id
				},
				data: {
					name: payload.name,
					address: payload.address,
					code: payload.code,
					logo_uri: payload.logoUri
				}
			});
		} else {
			return await prisma.company.create({
				data: {
					name: payload.name,
					address: payload.address,
					code: payload.code,
					logo_uri: payload.logoUri
				}
			});
		}
	};

	public delete = async (id: string) => {
		return await prisma.company.delete({
			where: {
				id: id
			}
		});
	};
}

export default CompanyService;
