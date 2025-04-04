export enum CardType {
	PU_TONG_JIN_NANG,
	YAN_SHI_JIN_NANG,
	JI_CHU,
	WU_QI,
	FANG_JU,
	ZUO_QI,
	BAO_WU,
}

export const shoupaiArray = [
	{
		name: '闪电',
		suits: '♠',
		point: 'A',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '决斗',
		suits: '♠',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '古锭刀',
		suits: '♠',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: '八卦阵',
		suits: '♠',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: '雌雄双股剑',
		suits: '♠',
		point: '2',
		type: CardType.WU_QI,
	},
	{
		name: '寒冰剑',
		suits: '♠',
		point: '2',
		type: CardType.WU_QI,
	},
	{
		name: '藤甲',
		suits: '♠',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: '过河拆桥',
		suits: '♠',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '顺手牵羊',
		suits: '♠',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '酒',
		suits: '♠',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '过河拆桥',
		suits: '♠',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '顺手牵羊',
		suits: '♠',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '雷杀',
		suits: '♠',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '青龙偃月刀',
		suits: '♠',
		point: '5',
		type: CardType.WU_QI,
	},
	{
		name: '绝影',
		suits: '♠',
		point: '5',
		type: CardType.ZUO_QI,
	},
	{
		name: '雷杀',
		suits: '♠',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '乐不思蜀',
		suits: '♠',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '青钢剑',
		suits: '♠',
		point: '6',
		type: CardType.WU_QI,
	},
	{
		name: '雷杀',
		suits: '♠',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '南蛮入侵',
		suits: '♠',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♠',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♠',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '酒',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♠',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '兵粮寸断',
		suits: '♠',
		point: '10',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '无懈可击',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '顺手牵羊',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '铁索连环',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '丈八蛇矛',
		suits: '♠',
		point: 'Q',
		type: CardType.WU_QI,
	},
	{
		name: '过河拆桥',
		suits: '♠',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '铁索连环',
		suits: '♠',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '大宛',
		suits: '♠',
		point: 'K',
		type: CardType.ZUO_QI,
	},
	{
		name: '南蛮入侵',
		suits: '♠',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '无懈可击',
		suits: '♠',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '桃园结义',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '万箭齐发',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '无懈可击',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '闪',
		suits: '♥',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♥',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '火攻',
		suits: '♥',
		point: '2',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '桃',
		suits: '♥',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '五谷丰登',
		suits: '♥',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '火攻',
		suits: '♥',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '桃',
		suits: '♥',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '五谷丰登',
		suits: '♥',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '火杀',
		suits: '♥',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '麒麟弓',
		suits: '♥',
		point: '5',
		type: CardType.WU_QI,
	},
	{
		name: '赤兔',
		suits: '♥',
		point: '5',
		type: CardType.ZUO_QI,
	},
	{
		name: '桃',
		suits: '♥',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♥',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '乐不思蜀',
		suits: '♥',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '桃',
		suits: '♥',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♥',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '无中生有',
		suits: '♥',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '火杀',
		suits: '♥',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♥',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '无中生有',
		suits: '♥',
		point: '8',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '闪',
		suits: '♥',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♥',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '无中生有',
		suits: '♥',
		point: '9',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '闪',
		suits: '♥',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '火杀',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♥',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '无中生有',
		suits: '♥',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '闪',
		suits: '♥',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♥',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: '过河拆桥',
		suits: '♥',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '闪电',
		suits: '♥',
		point: 'Q',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '闪',
		suits: '♥',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: '爪黄飞电',
		suits: '♥',
		point: 'K',
		type: CardType.ZUO_QI,
	},
	{
		name: '闪',
		suits: '♥',
		point: 'K',
		type: CardType.JI_CHU,
	},
	{
		name: '无懈可击',
		suits: '♥',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '诸葛连弩',
		suits: '♣',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: '决斗',
		suits: '♣',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '白银狮子',
		suits: '♣',
		point: 'A',
		type: CardType.FANG_JU,
	},
	{
		name: '八卦阵',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '仁王盾',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: '藤甲',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: '过河拆桥',
		suits: '♣',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♣',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '酒',
		suits: '♣',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '过河拆桥',
		suits: '♣',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♣',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '兵粮寸断',
		suits: '♣',
		point: '4',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '的卢',
		suits: '♣',
		point: '5',
		type: CardType.ZUO_QI,
	},
	{
		name: '杀',
		suits: '♣',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♣',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '乐不思蜀',
		suits: '♣',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♣',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♣',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '南蛮入侵',
		suits: '♣',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♣',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♣',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '雷杀',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '酒',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '铁索连环',
		suits: '♣',
		point: '10',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♣',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♣',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '铁索连环',
		suits: '♣',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '借刀杀人',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '无懈可击',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '铁索连环',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '借刀杀人',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '无懈可击',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '铁索连环',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '诸葛连弩',
		suits: '♦',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: '决斗',
		suits: '♦',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '朱雀羽扇',
		suits: '♦',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: '闪',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '顺手牵羊',
		suits: '♦',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '桃',
		suits: '♦',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '顺手牵羊',
		suits: '♦',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '火杀',
		suits: '♦',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '贯石斧',
		suits: '♦',
		point: '5',
		type: CardType.WU_QI,
	},
	// TODO 补充木牛流马牌的图片
	// {
	// 	"name": "木牛流马",
	// 	"suits": "♦",
	// 	"point": "5",
	// "type": CardType.BAO_WU
	// },
	{
		name: '火杀',
		suits: '♦',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '酒',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '杀',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '闪',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: '桃',
		suits: '♦',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: '方天画戟',
		suits: '♦',
		point: 'Q',
		type: CardType.WU_QI,
	},
	// {
	// 	"name": "银月枪",
	// 	"suits": "♦",
	// 	"point": "Q",
	// 	"type": "武器"
	// },
	{
		name: '火攻',
		suits: '♦',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: '杀',
		suits: '♦',
		point: 'K',
		type: CardType.JI_CHU,
	},
	{
		name: '紫骍',
		suits: '♦',
		point: 'K',
		type: CardType.ZUO_QI,
	},
	{
		name: '骅骝',
		suits: '♦',
		point: 'K',
		type: CardType.ZUO_QI,
	},
]
