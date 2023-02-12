import ArmFLag from '../../../assets/icons/flags/armenia-flag.png';
import RusFLag from '../../../assets/icons/flags/russia-flag.png';
import UKFLag from '../../../assets/icons/flags/united-kingdom-flag.png';

export type LanguageType = {
	id: number;
	language: string,
	flag: string;
	alt: string;
	shortName: string;
};

export const languages: LanguageType[] = [
	{
		id: 1,
		language: "Հայերեն",
		flag: ArmFLag,
		alt: 'Հայերեն',
		shortName: 'Arm'
	},
	{
		id: 2,
		language: 'Русский',
		flag: RusFLag,
		alt: 'Русский',
		shortName: 'Rus'

	},
	{
		id: 3,
		language: 'English',
		flag: UKFLag,
		alt: 'English',
		shortName: 'Eng'

	}
];
