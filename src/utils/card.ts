import { shoupaiArray, type Hand } from '../data/hands'
import { type Player } from './player'
import type { SkillCommonParam } from './typedef'

/**
 * 玩家弃牌 （包括不限于弃牌阶段、过河拆桥、武将技能等）
 * @param player 要弃牌的玩家
 * @param abandonedHands 要弃掉的手牌组成的数组
 * @param discardPile 弃牌堆
 */
export function qiPai(player: Player, abandonedHands: Hand[], discardPile: Hand[]): void {
    const arr: Hand[] = []
    player.handList.forEach((item, index) => {
        if (abandonedHands.find(delItem => delItem.srcIndex === item.srcIndex)) {
            const arr2 = player.handList.splice(index, 1)
            arr.push(arr2[0])
        }
    })

    discardPile.push(...arr)
}

/**
 * 初始化牌堆
 * @description 牌堆初始值为完整的军争手牌数组
 * @returns 牌堆数组
 */
export function initDeck(): Hand[] {
    return shuffleDecks([...shoupaiArray]).map((item, index) => {
        return { ...item, isChoosed: false, srcIndex: index }
    })
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
export function drawTheCards(player: Player, decks: Hand[], count?: number): void {
    const hands = getCardsFromDecksTop(decks, count)

    player.handList.push(...hands)
}

/**
 * @description 玩家从牌堆中摸符合条件的牌
 * @param player 	要摸牌的玩家
 * @param decks 	牌堆
 * @param callback 	类似各种数组方法的回调函数 用来筛选需要的牌
 * @param count 	摸牌数量（默认1张）
 */
export function drawTheCardsIf(
    player: Player,
    decks: Hand[],
    callback: (item: Hand, index?: number) => boolean,
    count?: number,
): void {
    const index = decks.findLastIndex(callback)
    const hands = decks.splice(index, count || 1).map(item => {
        return { ...item, isChoosed: false }
    })

    player.handList.push(...hands)
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

/**
 * 找到被选中的手牌并将其置入弃牌堆
 * @param user 使用者
 * @param discardPile 弃牌堆
 */
export function findChoosedHandAndDiscarded({ user, discardPile }: SkillCommonParam): void {
    const index = user.handList.findIndex(item => {
        return item.isChoosed
    })
    const cards = user.handList.splice(index, 1)

    discardPile.push(...cards)
}
