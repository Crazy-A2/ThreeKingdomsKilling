/* eslint-disable no-mixed-spaces-and-tabs */
export enum Gender {
	FEMALE,
	MALE,
}

export enum Country {
	WEI = '魏',
	SHU = '蜀',
	WU = '吴',
	QUN = '群',
}

/** 势力主题色 */
export const themeColor = new Map<Country, string>()
themeColor.set(Country.QUN, 'rgba(255,255,255,0.5)')
themeColor.set(Country.WEI, 'rgba(0, 4, 255, 0.5)')
themeColor.set(Country.SHU, 'rgba(255, 0, 0, 0.5)')
themeColor.set(Country.WU, 'rgba(26, 255, 0, 0.5)')

/** 技能触发/解锁时机 */
export enum TriggerTiming {
	CHU_PAI, // 							出牌阶段无次数限制
	CHU_PAI_YI_CI, // 						出牌阶段限一次
	SHOU_SHANG_YI_CI, // 					受到一次伤害时
	SHOU_SHANG_YI_DIAN, // 					受到一点伤害时
	SHI_YONG_HUO_DA_CHU, // 				需要使用或打出相应牌时
}

/** 技能类型 主要用来区分用哪个按钮 */
export enum SkillType {
	// LORD = 'lord', // 						主公技
	// LOCK = 'lock', // 						锁定技
	CHU_PAI = '出牌', // 					出牌阶段可主动使用
	BEI_DONG = '被动', // 					只能条件达成后被动触发
	JIN_YONG = '禁用', // 					被某些武将技能禁用会进入此状态
	JUE_XING = '觉醒', // 					仅觉醒技
	XIAN_DING = '限定', // 					仅限定技
}

/** 技能 */
export interface Skill {
	name: string // 						技能名
	type: SkillType // 						技能类型
	description: string // 					技能描述
	display?: boolean // 					是否显示
	triggerTiming?: TriggerTiming // 		触发时机
	do?: string // 							触发后对应的操作
}

/** 武将 */
export interface General {
	name: string // 						武将名
	gender: Gender // 			 			性别
	country: Country // 					势力
	maxHealth: number // 					血量上限
	currentHealth: number // 				当前血量
	skills: Skill[] // 						技能列表
}

export const wujiangArray: General[] = [
	{
		name: '界刘备',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '仁德',
				type: SkillType.CHU_PAI,
				description:
					'出牌阶段，你可将任意张手牌交给一名其他角色（每人限一次），当以此法给出第二张牌时，可视为使用一张基本牌',
			},
			{
				name: '激将',
				type: SkillType.CHU_PAI,
				description: '主公技，其他蜀势力角色可代替你使用或打出【杀】',
			},
		],
	},
	{
		name: '界曹操',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '奸雄',
				type: SkillType.BEI_DONG,
				description: '当你受到伤害时，你可以摸一张牌，并获得造成此伤害的牌',
			},
			{
				name: '护驾',
				type: SkillType.BEI_DONG,
				description: '主公技，其他魏势力角色可代替你使用或打出【闪】',
			},
		],
	},
	{
		name: '界孙权',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '制衡',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。
                若你以此法弃置了所有手牌，则额外摸一张牌。
                `,
			},
			{
				name: '救援',
				type: SkillType.BEI_DONG,
				description:
					'主公技，其他吴势力角色使用【桃】时，若其体力值大于你，则该角色可改为令你回复一点体力，然后其摸一张牌',
			},
		],
	},
	{
		name: '界关羽',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '武圣',
				type: SkillType.CHU_PAI,
				description: `你的红色牌均可当【杀】使用或打出。
                你的方块【杀】无距离限制。
                `,
			},
			{
				name: '义绝',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你弃置一张牌并选择一名其他角色，该角色展示一张手牌。
                若展示牌为黑色：
                1.该角色本回合非锁定技失效、不能使用或打出手牌。
                2.你对其使用的红桃【杀】伤害+1。
                若展示牌为红色：
                你获得展示牌，然后你可令该角色回复1点体力。
                `,
			},
		],
	},
	{
		name: '界张飞',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '咆哮',
				type: SkillType.BEI_DONG,
				description: `锁定技，你使用【杀】无次数限制。
                当你使用【杀】被抵消后，你本回合下一次【杀】造成的伤害+1。
                `,
			},
			{
				name: '替身',
				type: SkillType.BEI_DONG,
				description: `限定技，准备阶段，你可以回复所有体力，然后摸X张牌（X为你回复的体力值）。`,
			},
		],
	},

	{
		name: '界赵云',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '龙胆',
				type: SkillType.CHU_PAI,
				description: `你可以将【杀】当【闪】或【闪】当【杀】使用或打出。`,
			},
			{
				name: '涯角',
				type: SkillType.BEI_DONG,
				description: `当你于回合外使用或打出手牌时，你可以展示牌堆顶的一张牌并交给任意角色。
                若这两张牌类别不同，你弃置一张牌。
                `,
			},
		],
	},
	{
		name: '界马超',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '马术',
				type: SkillType.BEI_DONG,
				description: `锁定技，你与其他角色的距离-1。`,
			},
			{
				name: '铁骑',
				type: SkillType.BEI_DONG,
				description: `当你使用【杀】指定目标后，你可令其本回合非锁定技失效。
                然后你进行判定，除非目标角色弃置与判定牌花色相同的牌，否则不能使用【闪】响应此杀。
                `,
			},
		],
	},
	{
		name: '界甘宁',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '奇袭',
				type: SkillType.CHU_PAI,
				description: `你可以将黑色牌当【过河拆桥】使用。`,
			},
			{
				name: '奋威',
				type: SkillType.XIAN_DING,
				description: `限定技，当一张锦囊牌指定多个目标后，你可令此牌对其中任意名角色无效。`,
			},
		],
	},
	{
		name: '界黄盖',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '苦肉',
				type:SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可以弃置一张牌，然后失去一点体力。`,
			},
			{
				name: '诈降',
				type:SkillType.BEI_DONG,
				description: `锁定技，当你失去一点体力后，你摸三张牌。
                若此时是你的出牌阶段，你使用红色【杀】无距离限制且不可被【闪】响应，你本回合的出【杀】次数+1。
                `,
			},
		],
	},
	{
		name: '界夏侯惇',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '刚烈',
				type: SkillType.BEI_DONG,
				description: `当你受到一点伤害后，你可以进行判定：
                若结果为红色，对伤害来源造成一点伤害。
                若结果为黑色，你弃置其一张牌。
                `,
			},
			{
				name: '清俭',
				type: SkillType.BEI_DONG,
				description: `每回合限一次，你在摸牌阶段外获得牌后，可以展示人员张牌并交给一名其他角色。
                你以此法给出的牌每有一种类别，当前回合角色本回合手牌上限+1。
                `,
			},
		],
	},
	{
		name: '界张辽',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '突袭',
				type: SkillType.BEI_DONG,
				description: `摸牌阶段，你可以少摸任意张牌并获得等量的其他角色各一张手牌。`,
			},
		],
	},
	{
		name: '界许褚',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '裸衣',
				type: SkillType.BEI_DONG,
				description: `摸牌阶段开始时，你亮出牌堆顶三张牌，从中获得基本牌、武器牌和【决斗】。
                若如此做，你放弃摸牌，以你为伤害来源的【杀】或【决斗】造成的伤害+1，直到你的下回合开始。
                `,
			},
		],
	},
	{
		name: '界吕布',
		gender: Gender.MALE,
		country: Country.QUN,
		maxHealth: 5,
		currentHealth: 5,
		skills: [
			{
				name: '无双',
				type: SkillType.BEI_DONG,
				description: `锁定技，当你使用【杀】指定一个目标后，该角色需要使用两张【闪】才能抵消此【杀】。
                当你使用【决斗】指定一个目标后，该角色每次需要使用两张【杀】才能响应此【决斗】。
                `,
			},
			{
				name: '利驭',
				type: SkillType.BEI_DONG,
				description: `当你使用【杀】对一名其他角色造成伤害后，你可获得其区域的一张牌。
                若不为装备牌，其摸一张牌。
                若为装备牌，则视为你对由其指定的另一名角色使用一张【决斗】。
                `,
			},
		],
	},
	{
		name: '界华雄',
		gender: Gender.MALE,
		country: Country.QUN,
		maxHealth: 6,
		currentHealth: 6,
		skills: [
			{
				name: '耀武',
				type: SkillType.BEI_DONG,
				description: `锁定技，当你受到伤害时，若造成伤害的牌：为红色，伤害来源摸一张牌；不为红色，你摸一张牌。`,
			},
			{
				name: '势斩',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限两次，你可以令一名其他角色视为对你使用一张【决斗】。`,
			},
		],
	},
	{
		name: '界诸葛亮',
		gender: Gender.MALE,
		country: Country.SHU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '观星',
				type: SkillType.BEI_DONG,
				description: `准备阶段开始时，你可以观看牌堆顶的5张牌（场上存活人数小于四时改为三），然后以任意顺序置于牌堆顶或牌堆底。
                若均放于牌堆底，则结束阶段你可以再进行一次【观星】。
                `,
			},
			{
				name: '空城',
				type: SkillType.BEI_DONG,
				description: `锁定技，你没有手牌时，不能成为【杀】或【决斗】的目标。`,
			},
		],
	},
	{
		name: '界吕蒙',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 4,
		currentHealth: 4,
		skills: [
			{
				name: '克己',
				type: SkillType.BEI_DONG,
				description: `若你在出牌阶段内未使用或打出过【杀】，则你跳过弃牌阶段。`,
			},
			{
				name: '勤学',
				type: SkillType.JUE_XING,
				description: `觉醒技，准备阶段，若你的手牌比体力值多三或更多（游戏人数大于七时改为二），你减一点体力上限，获得技能【攻心】`,
			},
			{
				display: false,
				name: '攻心',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中一张红桃并选择一项：
                1.弃置此牌。
                2.将此牌置于牌堆顶。
                `,
			},
		],
	},
	{
		name: '界周瑜',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '英姿',
				type: SkillType.BEI_DONG,
				description: `锁定技，摸牌阶段，你额外摸一张牌。
                你的手牌上限等于X（X为你的体力上限）。
                `,
			},
			{
				name: '反间',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可以展示一张手牌并交给一名其他角色，其选择一项：
                1.展示所有手牌并弃置所有与此牌同花色的牌。
                2.失去一点体力。
                `,
			},
		],
	},
	{
		name: '界陆逊',
		gender: Gender.MALE,
		country: Country.WU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '谦逊',
				type: SkillType.BEI_DONG,
				description: `当其他角色使用锦囊牌对你生效时，若你是此牌唯一目标，则你可将所有手牌移出游戏直至回合结束。`,
			},
			{
				name: '连营',
				type: SkillType.BEI_DONG,
				description: `当你失去最后手牌后，你可令至多X名角色各摸一张牌（X为你最后失去的手牌数）。`,
			},
		],
	},
	{
		name: '界司马懿',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '反馈',
				type: SkillType.BEI_DONG,
				description: `当你受到一点伤害后，你可以获得伤害来源的一张牌。`,
			},
			{
				name: '鬼才',
				type: SkillType.BEI_DONG,
				description: `当一名角色的判定牌生效前，你可以打出一张牌代替。`,
			},
		],
	},
	{
		name: '界郭嘉',
		gender: Gender.MALE,
		country: Country.WEI,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '天妒',
				type: SkillType.BEI_DONG,
				description: `当你的判定牌生效后，你可以获得此牌。`,
			},
			{
				name: '遗计',
				type: SkillType.BEI_DONG,
				description: `当你受到一点伤害后，你可以摸两张牌，然后将至多两张手牌交给一至两名其他角色。`,
			},
		],
	},
	{
		name: '界华佗',
		gender: Gender.MALE,
		country: Country.QUN,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '急救',
				type: SkillType.BEI_DONG,
				description: `你的回合外，你可将红牌当【桃】使用。`,
			},
			{
				name: '青囊',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可弃置一张手牌并令一名角色回复一点体力。
                若弃牌为红色，则可再次发动此技能，但不可选择本回合已选择过的角色。
                `,
			},
		],
	},
	{
		name: '界黄月英',
		gender: Gender.FEMALE,
		country: Country.SHU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '集智',
				type: SkillType.BEI_DONG,
				description: `使用锦囊牌时你可摸一张牌。
                若摸的牌是基本牌且在你回合内，你可弃置此牌令本回合手牌上限+1。
                `,
			},
			{
				name: '奇才',
				type: SkillType.BEI_DONG,
				description: `锁定技，你使用锦囊牌无距离限制。
                其他角色不能弃置你装备区的防具和宝物牌。
                `,
			},
		],
	},
	{
		name: '界大乔',
		gender: Gender.FEMALE,
		country: Country.WU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '国色',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你选择一项：
                1.将一张方块牌当【乐不思蜀】使用，然后摸一张牌。
                2.弃置一张方块牌并弃置一张场上的【乐不思蜀】，然后摸一张牌。
                `,
			},
			{
				name: '流离',
				type: SkillType.BEI_DONG,
				description: `当你成为【杀】的目标后，你可弃置一张牌并选择你攻击范围内一名其他角色代替你成为此杀的目标。`,
			},
		],
	},
	{
		name: '界孙尚香',
		gender: Gender.FEMALE,
		country: Country.WU,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '结姻',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你选择一名男性角色，弃置一张手牌或将一张装备牌置入其装备区，你与其之间体力较高的摸一张牌，较低的回复一点体力。`,
			},
			{
				name: '枭姬',
				type: SkillType.BEI_DONG,
				description: `当你失去装备区里的一张牌后，你摸两张牌。`,
			},
		],
	},
	{
		name: '界甄姬',
		gender: Gender.FEMALE,
		country: Country.WEI,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '洛神',
				type: SkillType.BEI_DONG,
				description: `准备阶段开始时，你可进行判定，当黑判定牌生效后，你获得此牌且不计入本回合手牌上限。
                若判定结果为黑，你可重复进行判定。
                `,
			},
			{
				name: '倾国',
				type: SkillType.BEI_DONG,
				description: `你可将黑色手牌当【闪】使用或打出。`,
			},
		],
	},
	{
		name: '界貂蝉',
		gender: Gender.FEMALE,
		country: Country.QUN,
		maxHealth: 3,
		currentHealth: 3,
		skills: [
			{
				name: '离间',
				type: SkillType.CHU_PAI,
				description: `出牌阶段限一次，你可弃置一张牌并选择两名男性角色，视为第一名对第二名使用一张【决斗】。`,
			},
			{
				name: '闭月',
				type: SkillType.BEI_DONG,
				description: `结束阶段，你可摸一张牌。
                若你没有手牌，改为摸两张牌。
                `,
			},
		],
	},
]
