import { shoupaiArray, type Hand } from '../data/shoupai-junzheng'

interface GameState {
	isOver: boolean
	isPaused: boolean
	isWin: boolean
	isLose: boolean
}

// 定义游戏对象 包含整局游戏状态和通用游戏逻辑
export class Game {
	state: GameState = {
		isOver: false, // 		游戏是否结束
		isPaused: false, // 	游戏是否暂停
		isWin: false, // 		游戏是否胜利
		isLose: false, // 		游戏是否失败
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
 * @description 从牌堆中摸牌，返回摸到的牌，并从牌堆中删除摸到的牌
 * @param decks 牌堆
 * @param count 摸牌数量
 * @returns 摸到的牌的数组
 */
export function drawTheCards(decks: Hand[], count: number = 2): Hand[] {
	return decks.splice(-count, count).map(item => {
		return { ...item, isChoosed: false }
	})
}

// 摸牌测试
// const arr = shuffleDecks(getDecks().map((item) => { ...item, srcIndex: index }))
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const getCards = drawTheCards(arr)
// console.log(arr)
// console.log(getCards)
