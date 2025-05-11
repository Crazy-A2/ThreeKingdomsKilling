import type { Player } from './player'
import { drawTheCards } from './card'
import { GameState } from './game'
import type { Hand } from '../data/hands'
import { type Signal } from '@builder.io/qwik'

/**表示每个回合阶段的枚举 */
export enum HuiHe {
	DAI_JI, //         	回合外待机状态
	ZHUN_BEI, //        准备阶段
	PAN_DING, //        判定阶段
	MO_PAI, //          摸牌阶段
	CHU_PAI, //         出牌阶段
	QI_PAI, //          弃牌阶段
	JIE_SHU, //         结束阶段
}

/**
 * 回合阶段状态数组
 * @description 包含了回合内的各个阶段状态，方便进行状态转换和操作
 */
export const roundStateArray: HuiHe[] = [
	HuiHe.DAI_JI,
	HuiHe.ZHUN_BEI,
	HuiHe.PAN_DING,
	HuiHe.MO_PAI,
	HuiHe.CHU_PAI,
	HuiHe.QI_PAI,
	HuiHe.JIE_SHU,
]

/**
 * 执行一名玩家的回合
 * @param player 玩家对象
 * @param gameState 游戏状态对象
 */
export async function executePlayerRound(
	player: Player,
	gameState: Signal<GameState>
): Promise<void> {
	if (gameState.value === GameState.OVER) {
		console.log('游戏结束，停止执行回合')
		return
	}

	for (let i = 0; i < roundStateArray.length; i++) {
		if (gameState.value === GameState.OVER) {
			console.log('游戏结束，停止执行阶段')
			return
		}

		const startTime = Date.now()
		await new Promise(resolve => setTimeout(resolve, 300))

		player.currentState = roundStateArray[i]
		await executeStageAction(player, roundStateArray[i], {}, gameState)

		const timeInterval = Date.now() - startTime
		console.log(`${roundStateArray[i]} 执行时间：${timeInterval}ms`)
	}

	// player.currentState = HuiHe.DAI_JI
}

/**
 * 执行某一回合阶段对应的操作
 * @param player 执行操作的玩家
 * @param action 要执行的回合阶段操作
 * @param params 给具体执行函数的额外参数
 * @param gameState 游戏状态对象
 * @returns 执行结果
 */
async function executeStageAction(
	player: Player,
	action: HuiHe,
	params: any = {},
	gameState: Signal<GameState>
): Promise<boolean> {
	if (gameState.value === GameState.OVER) {
		console.log('游戏结束，停止执行阶段操作')
		return false
	}

	player.currentState = action

	let result = false
	switch (action) {
		case HuiHe.ZHUN_BEI:
			result = executeZhunBei(player)
			break
		case HuiHe.PAN_DING:
			result = executePanDing(player)
			break
		case HuiHe.MO_PAI:
			result = executeMoPai(player, params)
			break
		case HuiHe.CHU_PAI:
			result = executeChuPai(player)
			break
		case HuiHe.QI_PAI:
			result = executeQiPai(player)
			break
		case HuiHe.JIE_SHU:
			result = executeJieShu(player)
			break

		case HuiHe.DAI_JI:
			console.log('回合外待机状态')
			break

		default:
			console.error('action 参数错误')
	}
	return result
}

// 准备阶段逻辑
function executeZhunBei(player: Player): boolean {
	console.log('准备阶段')
	return false
}

// 判定阶段逻辑
function executePanDing(player: Player): boolean {
	console.log('判定阶段')
	return false
}

/**
 * 摸牌阶段逻辑
 * @param player 玩家对象
 * @param params 包含被摸牌的指定牌堆的参数对象
 * @returns
 */
function executeMoPai(player: Player, params: { decks: Hand[] }): boolean {
	console.log('摸牌阶段')
	// drawTheCards(player, params.decks)
	return true
}

// 出牌阶段逻辑
function executeChuPai(player: Player): boolean {
	console.log('出牌阶段')
	return false
}

// 弃牌阶段逻辑
function executeQiPai(player: Player): boolean {
	console.log('弃牌阶段')
	// if (player.handList.length <= player.general.currentHealth) {
	// 	return true
	// }
	// // 手牌数量大于当前体力值，需弃掉多出的手牌
	// const discardCount = player.handList.length - player.general.currentHealth

	// // TODO 需要确认对话框组件
	// console.log(`还需弃掉 ${discardCount} 张牌`)
	// qiPai(player, discardCount)
	return true
}

// 结束阶段逻辑
function executeJieShu(player: Player): boolean {
	console.log('结束阶段')
	return false
}

function qiPai(player: Player, discardCount: number): boolean {
	// player.handList.splice(0, discardCount)
	return false
}
