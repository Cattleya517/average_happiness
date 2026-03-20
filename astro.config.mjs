// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Average Happiness',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			locales: {
				root: {
					label: '繁體中文',
					lang: 'zh-TW',
				},
				en: {
					label: 'English',
				},
			},

			sidebar: [
				{
					label: 'SPIRE Five Aspects in Life',
					translations: { 'zh-TW': 'SPIRE模型 生活五大面向' },
					items: [
						{ label: 'Spiritual', slug: 'spiritual', translations: { 'zh-TW': 'Spiritual 靈性' } },
						{ label: 'Physical', slug: 'physical', translations: { 'zh-TW': 'Physical 身體' } },
						{ label: 'Intellectual', slug: 'intellectual', translations: { 'zh-TW': 'Intellectual 智識' } },
						{ label: 'Relational', slug: 'relational', translations: { 'zh-TW': 'Relational 關係' } },
						{ label: 'Emotional', slug: 'emotional', translations: { 'zh-TW': 'Emotional 情緒' } },
					],
				},
				{
					label: 'Spirit',
					translations: { 'zh-TW': 'Spiritual 靈性' },
					items: [
						{ label: 'Overview', slug: 'spiritual', translations: { 'zh-TW': '總覽' } },
						{ label: 'Finding Passions', slug: 'spiritual/finding_passions', translations: { 'zh-TW': '尋找熱情' } },
						{ label: 'Purpose-About Work', slug: 'spiritual/work', translations: { 'zh-TW': '目標-關於工作' } },
					],
				},
				{
					label: 'Physical',
					translations: { 'zh-TW': 'Physical 身體' },
					items: [
						{ label: 'Overview', slug: 'physical', translations: { 'zh-TW': '總覽' } },
						{ label: 'Sleep', slug: 'physical/sleep', translations: { 'zh-TW': '睡眠' } },
						{ label: 'Eat', slug: 'physical/eat', translations: { 'zh-TW': '飲食' } },
						{ label: 'Exercise', slug: 'physical/exercise', translations: { 'zh-TW': '運動' } },
					],
				},
				{
					label: 'Intellectual',
					translations: { 'zh-TW': 'Intellectual 智識' },
					items: [
						{ label: 'Overview', slug: 'intellectual', translations: { 'zh-TW': '總覽' } },
						{ label: 'Cognitive', slug: 'intellectual/cognitive', translations: { 'zh-TW': '認知' } },
					],
				},
				{
					label: 'Relational',
					translations: { 'zh-TW': 'Relational 關係' },
					items: [
						{ label: 'Overview', slug: 'relational', translations: { 'zh-TW': '總覽' } },
						{ label: 'Friends', slug: 'relational/friends', translations: { 'zh-TW': '朋友' } },
					],
				},
				{
					label: 'Emotional',
					translations: { 'zh-TW': 'Emotional 情緒' },
					items: [
						{ label: 'Overview', slug: 'emotional', translations: { 'zh-TW': '總覽' } },
						{ label: 'Comparison', slug: 'emotional/comparison', translations: { 'zh-TW': '比較' } },
					],
				},
				{
					label: 'Others',
					translations: { 'zh-TW': '其他' },
					items: [
						{ label: 'Income', slug: 'others/income', translations: { 'zh-TW': '收入' } },
					],
				},
				{
					label: 'Reference',
					translations: { 'zh-TW': '參考資料' },
					items: [
						{ label: 'Reference', slug: 'reference', translations: { 'zh-TW': '參考資料' } },
					],
				},
			],
		}),
	],
});
