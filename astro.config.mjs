// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Average Happiness',
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
						{ label: 'Spirit', slug: 'five_aspect', translations: { 'zh-TW': 'Spirit 靈性' } },
						{ label: 'Physical', slug: 'five_aspect', translations: { 'zh-TW': 'Physical 身體' } },
						{ label: 'Intellectual', slug: 'five_aspect', translations: { 'zh-TW': 'Intellectual 智識' } },
						{ label: 'Relational', slug: 'five_aspect', translations: { 'zh-TW': 'Relational 關係' } },
						{ label: 'Emotional', slug: 'five_aspect', translations: { 'zh-TW': 'Emotional 情緒' } },
					],
				},
				{
					label: 'Spirit',
					translations: { 'zh-TW': 'Spiritual 靈性' },
					items: [
						{ label: 'Purposes', slug: 'five_aspect', translations: { 'zh-TW': '目標' } },
						{ label: 'Spirit Item1', slug: 'five_aspect', translations: { 'zh-TW': '靈性項目1' } },
					],
				},
				{
					label: 'Physical',
					translations: { 'zh-TW': 'Physical 身體' },
					items: [
						{ label: 'Sleep', slug: 'five_aspect', translations: { 'zh-TW': '睡眠' } },
						{ label: 'Eat', slug: 'five_aspect', translations: { 'zh-TW': '飲食' } },
						{ label: 'Exercise', slug: 'five_aspect', translations: { 'zh-TW': '運動' } },
					],
				},
				{
					label: 'Intellectual',
					translations: { 'zh-TW': 'Intellecutal 智識' },
					items: [
						{ label: 'Purposes', slug: 'five_aspect', translations: { 'zh-TW': '目標' } },
						{ label: 'Cognitive', slug: 'five_aspect', translations: { 'zh-TW': '認知' } },
					],
				},
				{
					label: 'Relational',
					translations: { 'zh-TW': 'Relational 關係' },
					items: [
						{ label: 'Friends', slug: 'five_aspect', translations: { 'zh-TW': '朋友' } },
					],
				},
				{
					label: 'Emotional',
					translations: { 'zh-TW': 'Emotional 情緒' },
					items: [
						{ label: 'Comparision', slug: 'five_aspect', translations: { 'zh-TW': '比較' } },
					],
				},
				{
					label: 'Guides',
					translations: { 'zh-TW': '指南' },
					items: [
						{ label: 'Example Guide', slug: 'guides/example', translations: { 'zh-TW': '範例指南' } },
					],
				},
				{
					label: 'Reference',
					translations: { 'zh-TW': '參考資料' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
