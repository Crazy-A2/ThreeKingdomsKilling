import type { Signal } from '@builder.io/qwik'
import type { Player } from './player'
import { executePlayerRound } from './round-stage'

export enum GameResult {
	UNKNOWN, // 						未知
	ZHU_GONG_AND_ZHONG_CHENG_WIN, // 	主公和忠臣胜利
	FAN_ZEI_WIN, // 					反贼胜利
	NEI_JIAN_WIN, // 					内奸胜利
}

export interface GameState {
	isOver: boolean // 					游戏是否结束
	isPaused: boolean // 				游戏是否暂停
	result: GameResult // 				游戏结果
}

/**
 * 执行游戏主循环
 * @param players 本局玩家数组
 * @param gameRound 当前游戏轮数
 * @param game 游戏对象
 */
export async function executeGameLoop(
	players: Player[],
	gameRound: Signal<number>,
	game: GameState
): Promise<void> {
	let i = 0
	while (!game.isOver) {
		await executePlayerRound(players[i], game)

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
