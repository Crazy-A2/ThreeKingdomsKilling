export enum GameResult {
	WIN, // 胜利
	LOSE, // 失败
	UNKNOWN, // 未知
}

interface GameState {
	isOver: boolean // 游戏是否结束
	isPaused: boolean // 游戏是否暂停
	result: GameResult // 游戏结果
}

export class Game {
	state: GameState = {
		isOver: false,
		isPaused: false,
		result: GameResult.UNKNOWN,
	}
}
