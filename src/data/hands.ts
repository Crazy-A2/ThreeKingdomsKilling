/** 手牌类型 */
export enum CardType {
	PU_TONG_JIN_NANG, // 		普通锦囊
	YAN_SHI_JIN_NANG, // 		延时锦囊
	JI_CHU, //   				基础牌
	WU_QI, // 					武器牌
	FANG_JU, // 				防具牌
	JIN_GONG_ZUO_QI, // 		进攻坐骑
	FANG_YU_ZUO_QI, // 			防御坐骑
	BAO_WU, // 					宝物牌
}

/** 定义手牌对象 */
export interface Hand {
	name: string // 			牌名
	suits: string // 			花色
	point: string // 			点数
	type: CardType // 			牌型
	srcIndex?: number // 		原始索引位置 手牌的唯一id
	isChoosed?: boolean // 		是否被选中
}

export const shoupaiArray: Hand[] = [
	{
		name: 'shan_dian',
		suits: '♠',
		point: 'A',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'jue_dou',
		suits: '♠',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'gu_ding_dao',
		suits: '♠',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: 'ba_gua_zhen',
		suits: '♠',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: 'ci_xiong_shuang_gu_jian',
		suits: '♠',
		point: '2',
		type: CardType.WU_QI,
	},
	{
		name: 'han_bing_jian',
		suits: '♠',
		point: '2',
		type: CardType.WU_QI,
	},
	{
		name: 'teng_jia',
		suits: '♠',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♠',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shun_shou_qian_yang',
		suits: '♠',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'jiu',
		suits: '♠',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♠',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shun_shou_qian_yang',
		suits: '♠',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'lei_sha',
		suits: '♠',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'qing_long_yan_yue_dao',
		suits: '♠',
		point: '5',
		type: CardType.WU_QI,
	},
	{
		name: 'jue_ying',
		suits: '♠',
		point: '5',
		type: CardType.FANG_YU_ZUO_QI,
	},
	{
		name: 'lei_sha',
		suits: '♠',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'le_bu_si_shu',
		suits: '♠',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'qing_gang_jian',
		suits: '♠',
		point: '6',
		type: CardType.WU_QI,
	},
	{
		name: 'lei_sha',
		suits: '♠',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'nan_man_ru_qin',
		suits: '♠',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♠',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♠',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'jiu',
		suits: '♠',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♠',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'bing_liang_cun_duan',
		suits: '♠',
		point: '10',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shun_shou_qian_yang',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♠',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'zhang_ba_she_mao',
		suits: '♠',
		point: 'Q',
		type: CardType.WU_QI,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♠',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♠',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'da_wan',
		suits: '♠',
		point: 'K',
		type: CardType.JIN_GONG_ZUO_QI,
	},
	{
		name: 'nan_man_ru_qin',
		suits: '♠',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♠',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tao_yuan_jie_yi',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'wan_jian_qi_fa',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♥',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shan',
		suits: '♥',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♥',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'huo_gong',
		suits: '♥',
		point: '2',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_gu_feng_deng',
		suits: '♥',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'huo_gong',
		suits: '♥',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_gu_feng_deng',
		suits: '♥',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'huo_sha',
		suits: '♥',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'qi_lin_gong',
		suits: '♥',
		point: '5',
		type: CardType.WU_QI,
	},
	{
		name: 'chi_tu',
		suits: '♥',
		point: '5',
		type: CardType.JIN_GONG_ZUO_QI,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'le_bu_si_shu',
		suits: '♥',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_zhong_sheng_you',
		suits: '♥',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'huo_sha',
		suits: '♥',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_zhong_sheng_you',
		suits: '♥',
		point: '8',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shan',
		suits: '♥',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♥',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_zhong_sheng_you',
		suits: '♥',
		point: '9',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shan',
		suits: '♥',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'huo_sha',
		suits: '♥',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♥',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_zhong_sheng_you',
		suits: '♥',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shan',
		suits: '♥',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♥',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♥',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'shan_dian',
		suits: '♥',
		point: 'Q',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'shan',
		suits: '♥',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: 'zhua_huang_fei_dian',
		suits: '♥',
		point: 'K',
		type: CardType.FANG_YU_ZUO_QI,
	},
	{
		name: 'shan',
		suits: '♥',
		point: 'K',
		type: CardType.JI_CHU,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♥',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'zhu_ge_lian_nu',
		suits: '♣',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: 'jue_dou',
		suits: '♣',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'bai_yin_shi_zi',
		suits: '♣',
		point: 'A',
		type: CardType.FANG_JU,
	},
	{
		name: 'ba_gua_zhen',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'ren_wang_dun',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: 'teng_jia',
		suits: '♣',
		point: '2',
		type: CardType.FANG_JU,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♣',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'jiu',
		suits: '♣',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'guo_he_chai_qiao',
		suits: '♣',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'bing_liang_cun_duan',
		suits: '♣',
		point: '4',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'di_lu',
		suits: '♣',
		point: '5',
		type: CardType.FANG_YU_ZUO_QI,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♣',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'le_bu_si_shu',
		suits: '♣',
		point: '6',
		type: CardType.YAN_SHI_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♣',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'nan_man_ru_qin',
		suits: '♣',
		point: '7',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♣',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'lei_sha',
		suits: '♣',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'jiu',
		suits: '♣',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♣',
		point: '10',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♣',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♣',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♣',
		point: 'J',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'jie_dao_sha_ren',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♣',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'jie_dao_sha_ren',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'wu_xie_ke_ji',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tie_suo_lian_huan',
		suits: '♣',
		point: 'K',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'zhu_ge_lian_nu',
		suits: '♦',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: 'jue_dou',
		suits: '♦',
		point: 'A',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'zhu_que_yu_shan',
		suits: '♦',
		point: 'A',
		type: CardType.WU_QI,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♦',
		point: '2',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'shun_shou_qian_yang',
		suits: '♦',
		point: '3',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'tao',
		suits: '♦',
		point: '3',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'shun_shou_qian_yang',
		suits: '♦',
		point: '4',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'huo_sha',
		suits: '♦',
		point: '4',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'guan_shi_fu',
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
		name: 'huo_sha',
		suits: '♦',
		point: '5',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '6',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '7',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '8',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'jiu',
		suits: '♦',
		point: '9',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'sha',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: '10',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'shan',
		suits: '♦',
		point: 'J',
		type: CardType.JI_CHU,
	},
	{
		name: 'tao',
		suits: '♦',
		point: 'Q',
		type: CardType.JI_CHU,
	},
	{
		name: 'fang_tian_hua_ji',
		suits: '♦',
		point: 'Q',
		type: CardType.WU_QI,
	},
	// TODO 补充银月枪牌的图片
	// {
	// 	"name": "银月枪",
	// 	"suits": "♦",
	// 	"point": "Q",
	// 	"type": "武器"
	// },
	{
		name: 'huo_gong',
		suits: '♦',
		point: 'Q',
		type: CardType.PU_TONG_JIN_NANG,
	},
	{
		name: 'sha',
		suits: '♦',
		point: 'K',
		type: CardType.JI_CHU,
	},
	{
		name: 'zi_xin',
		suits: '♦',
		point: 'K',
		type: CardType.JIN_GONG_ZUO_QI,
	},
	{
		name: 'hua_liu',
		suits: '♦',
		point: 'K',
		type: CardType.FANG_YU_ZUO_QI,
	},
]
