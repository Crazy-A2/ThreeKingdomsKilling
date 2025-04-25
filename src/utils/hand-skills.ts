import type { Player } from './player'
import type { Hand } from '../data/shoupai-junzheng'
import { findChoosedHandAndDiscarded } from './card'

/**
 * 杀
 * @description 杀的使用条件：目标玩家在攻击范围内
 * @param user 使用者
 * @param target 目标玩家
 * @param discardPile 弃牌堆
 */
export function sha(user: Player, target: Player, discardPile: Hand[]): void {
	// TODO 判断目标玩家是否在攻击范围内 在选择手牌时根据手牌类型添加这段逻辑
	// TODO 等待目标玩家的响应

	console.log('before', { discardPile })

	findChoosedHandAndDiscarded(user, discardPile)
	// 目标玩家扣血
	target.general.currentHealth -= 1
	// TODO 检查是否死亡

	console.log('after', { discardPile })
	console.log('after', { target })
}

/**
 * 闪
 */
export function shan(user: Player, discardPile: Hand[]): void {}

/**
 * 桃
 */
export function tao(user: Player, discardPile: Hand[]): void {
	findChoosedHandAndDiscarded(user, discardPile)

	user.general.currentHealth += 1
}

/**
 * 酒
 */
export function jiu() {}

// 技能不是最重要的，重要的是技能的触发条件
// 但需要先实现出牌流程逻辑，空有技能触发条件，没有出牌逻辑，技能无法触发
// 武将牌渲染也还没搞定，需要先搞定武将牌渲染，才能实现技能
// 但是一开始，我最好实现一两个武将的技能，来验证最基础的敌我出牌交互逻辑

// 回合阶段也需要先实现，因为技能触发条件中，有回合阶段
// 回合阶段像状态机，完成一个阶段，切换下一个阶段
// 来一段伪代码：
// while (true) {
// 	// 游戏主循环
// 	HuiHe.ZHUN_BEI

// 	// 准备阶段
// 	// 准备阶段结束，切换到判定阶段
// 	// 判定阶段
// 	// 判定阶段结束，切换到摸牌阶段
// 	// 摸牌阶段
// 	// 摸牌阶段结束，切换到出牌阶段
// 	// 出牌阶段
// 	// 出牌阶段结束，切换到弃牌阶段
// 	// 弃牌阶段
// 	// 弃牌阶段结束，切换到结束阶段
// 	// 结束阶段
// 	// 回合结束，切换到下一玩家回合
// }
