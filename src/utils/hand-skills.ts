import type { Player } from './player'
import type { Hand } from '../data/hands'
import { findChoosedHandAndDiscarded } from './card'

/**
 * 杀
 * @description 出牌阶段，对你攻击范围内的另一名角色使用，对该角色造成 1 点伤害
 * @param user 使用者
 * @param target 目标玩家
 * @param discardPile 弃牌堆
 */
export function sha(user: Player, target: Player, discardPile: Hand[]): void {
	// TODO 判断目标玩家是否在攻击范围内 在选择手牌时根据手牌类型添加这段逻辑
	// TODO 等待目标玩家的响应

	console.log('before discardPile', { ...discardPile })

	findChoosedHandAndDiscarded(user, discardPile)
	// 目标玩家扣血
	target.general.currentHealth -= 1 + user.drinkingCount
	user.drinkingCount = 0
	// TODO 检查是否死亡

	console.log('after discardPile', { ...discardPile })
	console.log('after target', { ...target })
}

/**
 * 闪
 */
export function shan(user: Player, discardPile: Hand[]): void {}

/**
 * 桃
 * @description 两种使用方式：
 *
 * 1. 出牌阶段，对自己使用，回复 1 点体力
 *
 * 2. 当有角色处于濒死状态时，你可以对该角色使用桃，令其回复 1 点体力
 * @param user 使用者
 * @param discardPile 弃牌堆
 */
export function tao(user: Player, discardPile: Hand[]): void {
	findChoosedHandAndDiscarded(user, discardPile)

	user.general.currentHealth += 1

	// TODO 濒死回复
}

/**
 * 酒
 * @description 两种使用方式：
 *
 * 1. 出牌阶段，对自己使用，回合内使用的下一张【杀】伤害+1（每回合限一次）
 *
 * 2. 濒死状态，对自己使用，回复 1 点体力
 *
 */
export function jiu(user: Player, discardPile: Hand[]): void {
	findChoosedHandAndDiscarded(user, discardPile)

	// TODO 回合内使用的下一张【杀】伤害+1（每回合限一次）
	user.drinkingCount += 1
	// TODO 濒死回血
}

export const SKILL_NAME_MAP = {
	杀: 'sha',
	桃: 'tao',
	闪: 'shan',
	酒: 'jiu',
	过河拆桥: 'guo_he_chai_qiao',
	顺手牵羊: 'shun_shou_qian_yang',
	闪电: 'shan_dian',
	决斗: 'jue_dou',
	八卦阵: 'ba_gua_zhen',
	乐不思蜀: 'le_bu_si_shu',
	无懈可击: 'wu_xie_ke_ji',
	铁索连环: 'tie_suo_lian_huan',
	五谷丰登: 'wu_gu_feng_deng',
	火攻: 'huo_gong',
	兵粮寸断: 'bing_liang_cun_duan',
	诸葛连弩: 'zhu_ge_lian_nu',
	古锭刀: 'gu_ding_dao',
	寒冰剑: 'han_bing_jian',
	青龙偃月刀: 'qing_long_yan_yue_dao',
	丈八蛇矛: 'zhang_ba_she_mao',
	麒麟弓: 'qi_lin_gong',
	白银狮子: 'bai_yin_shi_zi',
	仁王盾: 'ren_wang_dun',
	藤甲: 'teng_jia',
	爪黄飞电: 'zhua_huang_fei_dian',
	赤兔: 'chi_tu',
	的卢: 'di_lu',
	绝影: 'jue_ying',
	大宛: 'da_wan',
	南蛮入侵: 'nan_man_ru_qin',
	万箭齐发: 'wan_jian_qi_fa',
	桃园结义: 'tao_yuan_jie_yi',
	无中生有: 'wu_zhong_sheng_you',
	火杀: 'huo_sha',
	雷杀: 'lei_sha',
} as const

// 触发条件达成后，对应卡牌亮起，可以点击来选中
// 但需要先实现出牌流程逻辑，空有技能触发条件，没有出牌逻辑，技能无法触发
// 技能不是最重要的，重要的是技能的触发条件

// 回合阶段也需要先实现，因为技能触发条件中，有回合阶段
// 回合阶段像状态机，完成一个阶段，切换下一个阶段
