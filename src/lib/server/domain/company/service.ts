import type { ICompanyService } from '$lib/server/interfaces/companyInterface';
import type { Company } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import type { TGetAll, TGetDetail } from '$lib/server/types/ServiceLayer';
class CompanyService implements ICompanyService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<TGetAll<Company> | null> => {
		try {
			const result: TGetAll<Company> | null = { data: null, recordsTotal: 0 };
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
				skip: parseInt(String(payload.start)) - 1 || 0,
				take: parseInt(String(payload.length)) || this.DEFAULT_SIZE,
				orderBy: {
					created_at: payload.order || 'desc'
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
					: undefined
			});

			result.data = records;
			result.recordsTotal = recordsTotal.length || 0;

			return result;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<TGetDetail<Company>> => {
		const records = await prisma.company.findUnique({
			where: {
				id: id
			}
		});

		return {
			data: records,
			recordsTotal: records.length || 0
		};
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
