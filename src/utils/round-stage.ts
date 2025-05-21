import type { Player } from './player'
import { drawTheCards, qiPai } from './card'
import { GameState } from './game'
import type { Hand } from '../data/hands'
import { type Signal } from '@builder.io/qwik'
import type { GameCommonParam } from './typedef'

/**表示每个回合阶段的枚举 */
export enum HuiHe {
    DAI_JI = '回合外待机状态',
    ZHUN_BEI = '准备阶段',
    PAN_DING = '判定阶段',
    MO_PAI = '摸牌阶段',
    CHU_PAI = '出牌阶段',
    QI_PAI = '弃牌阶段',
    JIE_SHU = '结束阶段',
}

/**
 * 回合阶段状态数组
 * @description 包含了回合内的各个阶段状态，方便进行状态转换和操作
 */
export const roundStateArray: HuiHe[] = [
    HuiHe.ZHUN_BEI,
    HuiHe.PAN_DING,
    HuiHe.MO_PAI,
    HuiHe.CHU_PAI,
    HuiHe.QI_PAI,
    HuiHe.JIE_SHU,
]

/**
 * 执行一名玩家的回合，包括准备阶段、判定阶段、摸牌阶段、出牌阶段、弃牌阶段和结束阶段
 * @param player 玩家对象
 * @param gameState 游戏状态对象
 * @param params 游戏通用参数
 */
export async function executePlayerRound(
    player: Player,
    gameState: Signal<GameState>,
    params: GameCommonParam,
): Promise<void> {
    if (gameState.value === GameState.OVER) {
        console.log('游戏结束，停止执行回合')
        return
    }

    // 我们将从 ZHUN_BEI 开始循环，并在 JIE_SHU 后设置回 DAI_JI
    for (const currentStage of roundStateArray) {
        if (gameState.value === GameState.OVER) {
            console.log('游戏结束，停止执行阶段')
            return
        }

        const startTime = Date.now()
        // await new Promise(resolve => setTimeout(resolve, 300)) // 移除固定等待

        player.currentState = currentStage
        console.log(`--- 开始执行阶段: ${player.general.name} - ${currentStage} ---`)
        await executeStageAction(player, currentStage, gameState, params) // 等待阶段动作完成

        const timeInterval = Date.now() - startTime
        console.log(`--- 阶段结束: ${player.general.name} - ${currentStage} (耗时: ${timeInterval}ms) ---`)
    }

    player.currentState = HuiHe.DAI_JI // 回合结束后将玩家设为待机状态
    console.log(`--- ${player.general.name} 的回合结束 ---`)
}

/**
 * 执行某一回合阶段对应的操作
 * @param player 执行操作的玩家
 * @param action 要执行的回合阶段操作
 * @param gameState 游戏状态对象
 * @param params 给具体执行函数的额外参数
 */
async function executeStageAction(
    player: Player,
    action: HuiHe,
    gameState: Signal<GameState>,
    params: GameCommonParam,
): Promise<void> {
    if (gameState.value === GameState.OVER) {
        console.log('游戏结束，停止执行阶段操作')
        return
    }

    player.currentState = action

    switch (action) {
        case HuiHe.ZHUN_BEI:
            await executeZhunBei(player)
            break
        case HuiHe.PAN_DING:
            await executePanDing(player)
            break
        case HuiHe.MO_PAI:
            await executeMoPai(player, params)
            break
        case HuiHe.CHU_PAI:
            await executeChuPai(player)
            break
        case HuiHe.QI_PAI:
            await executeQiPai(player, params)
            break
        case HuiHe.JIE_SHU:
            await executeJieShu(player)
            break
        default:
            console.error('action 参数错误:', action)
    }
}

/** 准备阶段逻辑 */
function executeZhunBei(player: Player): Promise<void> {
    console.log(`${player.general.name} - 准备阶段 - 开始`)
    // 实际准备阶段逻辑
    return new Promise(resolve => {
        // 模拟异步操作
        setTimeout(() => {
            console.log(`${player.general.name} - 准备阶段 - 完成`)
            resolve()
        }, 100) // 假设准备阶段需要100ms
    })
}

/** 判定阶段逻辑 */
function executePanDing(player: Player): Promise<void> {
    console.log(`${player.general.name} - 判定阶段 - 开始`)
    // 实际判定阶段逻辑
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${player.general.name} - 判定阶段 - 完成`)
            resolve()
        }, 300) // 假设判定阶段需要300ms
    })
}

/**
 * 摸牌阶段逻辑
 * @param player 玩家对象
 * @param params 包含被摸牌的指定牌堆的参数对象
 */
function executeMoPai(player: Player, params: GameCommonParam): Promise<void> {
    console.log(`${player.general.name} - 摸牌阶段 - 开始`)
    return new Promise(resolve => {
        // 实际摸牌逻辑
        drawTheCards(player, params.decks)
        console.log(`${player.general.name} 从牌堆摸了两张牌`)

        setTimeout(() => {
            console.log(`${player.general.name} - 摸牌阶段 - 完成`)
            resolve()
        }, 200) // 假设摸牌需要200ms
    })
}

// 出牌阶段逻辑
function executeChuPai(player: Player): Promise<void> {
    console.log(`${player.general.name} - 出牌阶段 - 开始`)
    // 实际出牌阶段逻辑，可能涉及玩家交互，会比较复杂
    return new Promise(resolve => {
        // 模拟玩家思考和出牌
        const duration = player.isComputer ? 1000 : 3000 // 电脑快一些，玩家慢一些
        console.log(`${player.general.name} 正在出牌... (等待 ${duration}ms)`)
        setTimeout(() => {
            console.log(`${player.general.name} - 出牌阶段 - 完成`)
            resolve()
        }, duration)
    })
}

/** 弃牌阶段逻辑
 * @param player 玩家对象
 * @param params 包含弃牌相关参数的参数对象
 */
export function executeQiPai(player: Player, params: GameCommonParam): Promise<void> {
    console.log(`${player.general.name} - 弃牌阶段 - 开始`)

    return new Promise(resolve => {
        const maxHand = player.general.currentHealth

        // 手牌数未超出最大手牌上限（通常是体力值，但武将技能可能改变上限），不弃牌
        if (player.handList.length <= maxHand) {
            console.log(`${player.general.name} 手牌未超出上限，无需弃牌`)
            resolve()
            return
        }

        const discardCount = player.handList.length - maxHand
        console.log(`${player.general.name} 需要弃掉 ${discardCount} 张牌`)

        if (!(params.showOptionDialog && params.optionDialogText)) {
            console.warn(`${player.general.name} - 弃牌阶段：缺少对话框参数，无法执行交互弃牌`)
            // 如果是电脑，或者没有交互，可以实现自动弃牌逻辑
            // const autoSelectedCards = autoSelectCardsToDiscard(player, discardCount);
            // if (params.discardPile) {
            //     qiPai(player, autoSelectedCards, params.discardPile);
            //     console.log(`${player.general.name} （模拟）自动弃牌完成`);
            // } else {
            //     console.warn(`${player.general.name} - （模拟）自动弃牌：缺少 discardPile 参数`);
            // }
            console.log(`${player.general.name} （模拟）自动弃牌完成 (实际qiPai调用需要参数)`)
            resolve()
        }

        // if (params.showOptionDialog && params.optionDialogText) {
        params.optionDialogText && (params.optionDialogText.value = `${player.general.name} 请弃掉 ${discardCount} 张牌`)
        params.showOptionDialog && !player.isComputer && (params.showOptionDialog.value = true)

        // 此处应该有一个等待玩家操作的机制，例如等待 OptionDialog 的 Promise
        // OptionDialog 返回一个 promise 结果
        // 或者 OptionDialog 修改主路由文件定义的 promise 信号

        // 目前仅为模拟
        console.log('（模拟）等待玩家弃牌操作...')

        setTimeout(
            () => {
                // 模拟弃牌完成
                // 实际的弃牌逻辑
                if (params.cardsToDiscard && params.discardPile) {
                    qiPai(player, params.cardsToDiscard, params.discardPile)
                    console.log(`${player.general.name} （模拟）通过 qiPai 函数弃牌完成`)
                } else {
                    console.warn(`${player.general.name} - （模拟）弃牌：缺少 cardsToDiscard 或 discardPile 参数`)
                }
                params.showOptionDialog && (params.showOptionDialog.value = false)
                resolve()
            },
            player.isComputer ? 500 : 2500,
        ) // 电脑弃牌快，玩家慢
        // }
    })
}

// 结束阶段逻辑
function executeJieShu(player: Player): Promise<void> {
    console.log(`${player.general.name} - 结束阶段`)
    // 实际结束阶段逻辑
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${player.general.name} - 结束阶段完成`)
            resolve()
        }, 100) // 假设结束阶段很快
    })
}

// 弃牌阶段
// 手牌溢出
// 弹出提醒弃牌对话框
// 选择要弃掉的手牌
// 点击确定
// 关闭对话框
// 弃牌
// 返回 Promise（弃牌成功后 resolve）
