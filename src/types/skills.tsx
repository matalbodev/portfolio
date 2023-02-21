type DataDBSkillsType = {
	id: string;
	attributes: {
		name: string;
		experience: string;
		icon?: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
	};
};
type MetaDBSkillsType = {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
};
export type DBSkillsType = {
	data: DataDBSkillsType[];
	meta: MetaDBSkillsType;
};

export type ConvertedSkill = {
	name: string;
	xp: number;
	icon: string;
};

export type ConvertedSkills = ConvertedSkill[];
