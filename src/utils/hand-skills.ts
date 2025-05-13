import type { Player } from './player'
import type { Hand } from '../data/hands'
import { findChoosedHandAndDiscarded } from './card'

// 触发条件达成后，对应卡牌亮起，可以点击来选中
// 但需要先实现出牌流程逻辑，空有技能触发条件，没有出牌逻辑，技能无法触发
// 技能不是最重要的，重要的是技能的触发条件

// 回合阶段也需要先实现，因为技能触发条件中，有回合阶段
// 回合阶段像状态机，完成一个阶段，切换下一个阶段

export const HandSkill = {
	/**
	 * 杀
	 * @description 出牌阶段，对你攻击范围内的另一名角色使用，对该角色造成 1 点伤害
	 * @param user 使用者
	 * @param target 目标玩家
	 * @param discardPile 弃牌堆
	 */
	sha(user: Player, target: Player, discardPile: Hand[]): void {
		// TODO 判断目标玩家是否在攻击范围内 在选择手牌时根据手牌类型添加这段逻辑
		// TODO 等待目标玩家的响应

		console.log('before discardPile', { ...discardPile })
		console.log('before target', { ...target })

		findChoosedHandAndDiscarded(user, discardPile)
		// 目标玩家扣血
		target.general.currentHealth -= 1 + user.drinkingCount
		user.drinkingCount = 0
		// TODO 检查是否死亡

		console.log('after discardPile', { ...discardPile })
		console.log('after target', { ...target })
	},

	/**
	 * 闪
	 */
	shan(user: Player, discardPile: Hand[]): void {},

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
	tao(user: Player, discardPile: Hand[]): void {
		findChoosedHandAndDiscarded(user, discardPile)

		user.general.currentHealth += 1

		// TODO 濒死回复
	},

	/**
	 * 酒
	 * @description 两种使用方式：
	 *
	 * 1. 出牌阶段，对自己使用，回合内使用的下一张【杀】伤害+1（每回合限一次）
	 *
	 * 2. 濒死状态，对自己使用，回复 1 点体力
	 *
	 */
	jiu(user: Player, discardPile: Hand[]): void {
		findChoosedHandAndDiscarded(user, discardPile)

		// TODO 回合内使用的下一张【杀】伤害+1（每回合限一次）
		user.drinkingCount += 1
		// TODO 濒死回血
	},
}
