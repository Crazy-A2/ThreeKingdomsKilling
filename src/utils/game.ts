import { shoupaiArray, type Hand } from '../data/shoupai-junzheng'
import { type Player } from './player'

export enum GameResult {
	WIN, // 				胜利
	LOSE, // 				失败
	UNKNOWN, // 			未知
}

interface GameState {
	isOver: boolean // 		游戏是否结束
	isPaused: boolean // 	游戏是否暂停
	result: GameResult // 	游戏结果
}

// 定义游戏对象 包含整局游戏状态和通用游戏逻辑
export class Game {
	state: GameState = {
		isOver: false,
		isPaused: false,
		result: GameResult.UNKNOWN,
	}

	// 游戏逻辑
}

/**
 * 初始化牌堆
 * @description 牌堆初始值为完整的军争手牌数组
 * @returns 牌堆数组
 */
export function initDecks(): Hand[] {
	return shuffleDecks([...shoupaiArray])
}

/**
 * 洗牌
 * @description 洗牌算法，打乱牌堆顺序
 * @param decks 牌堆
 * @returns 被打乱的牌堆
 * @example shuffleDecks(getDecks()) // 打乱牌堆
 */
export function shuffleDecks(decks: Hand[]): Hand[] {
	return decks.sort(() => Math.random() - 0.5)
}

// 洗牌测试
// const arr = shuffleDecks(getDecks().map((item) => { ...item, srcIndex: index }))
// const arr = shuffleDecks(getDecks().map((item) =>  srcIndex: index ))
// console.log(arr) // 打乱后的数组

/**
 * 摸牌
 * @description 玩家从牌堆中摸牌
 * @param player 	要摸牌的玩家
 * @param decks 	牌堆
 * @param count 	摸牌数量（默认两张）
 */
export function drawTheCards(player: Player, decks: Hand[], count?: number) {
	const hands = getCardsFromDecksTop(decks, count).map(item => {
		return { ...item, isChoosed: false }
	})

	player.handList.push(...hands) // 添加到玩家的手牌数组中
}

// 摸牌测试
// const arr = shuffleDecks(getDecks().map((item) => { ...item, srcIndex: index }))
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const getCards = drawTheCards(arr)
// console.log(arr)
// console.log(getCards)

/**
 * 获取牌堆顶的 count 张牌
 * @param decks 牌堆
 * @param count 要获取的卡牌数
 * @returns 获取到的卡牌数组
 */
export function getCardsFromDecksTop(decks: Hand[], count: number = 2): Hand[] {
	return decks.splice(-count, count)
}
