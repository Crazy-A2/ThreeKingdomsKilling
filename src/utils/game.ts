export enum GameResult {
	UNKNOWN, // 						未知
	ZHU_GONG_AND_ZHONG_CHENG_WIN, // 	主公和忠臣胜利
	FAN_ZEI_WIN, // 					反贼胜利
	NEI_JIAN_WIN, // 					内奸胜利
}

export interface GameState {
	isOver: boolean // 		游戏是否结束
	isPaused: boolean // 	游戏是否暂停
	result: GameResult // 	游戏结果
}
