import type { Signal } from '@builder.io/qwik'
import type { Player } from './player'
import { executePlayerRound } from './round-stage'

/** 成员不确定的对象 */
export type NotSureObject = Record<string, any>

/** 任意参数，任意返回值的函数类型 */
export type AnyFunction = (...args: any[]) => any

export enum GameResult {
	UNKNOWN, // 						未知
	ZHU_GONG_AND_ZHONG_CHENG_WIN, // 	主公和忠臣胜利
	FAN_ZEI_WIN, // 					反贼胜利
	NEI_JIAN_WIN, // 					内奸胜利
}

export enum GameState {
	NOT_STARTED, // 					游戏未开始
	PAUSED, // 							游戏暂停
	OVER, // 							游戏结束
}

/**
 * 执行游戏主循环
 * @param players 本局玩家数组
 * @param gameRound 当前游戏轮数
 * @param gameState 游戏状态对象
 */
export async function executeGameLoop(
	players: Player[],
	gameRound: Signal<number>,
	gameState: Signal<GameState>
): Promise<void> {
	let i = 0
	while (gameState.value !== GameState.OVER) {
		await executePlayerRound(players[i], gameState)

		// 本轮结束，开启下一轮
		if (i === players.length - 1) {
			i = 0
			++gameRound.value
			console.log(`本轮结束，开启下一轮`)
			continue
		}

		++i
	}
	console.log('游戏结束，退出游戏循环')
}
