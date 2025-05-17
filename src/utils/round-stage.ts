import type { Player } from './player'
import { drawTheCards, qiPai } from './card'
import { GameState } from './game'
import type { Hand } from '../data/hands'
import { type Signal } from '@builder.io/qwik'

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
    // HuiHe.DAI_JI,
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
export async function executePlayerRound(player: Player, gameState: Signal<GameState>): Promise<void> {
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
        await executeStageAction(player, currentStage, {}, gameState) // 等待阶段动作完成

        const timeInterval = Date.now() - startTime
        console.log(`--- 阶段结束: ${player.general.name} - ${currentStage} (耗时: ${timeInterval}ms) ---`)
    }

    player.currentState = HuiHe.DAI_JI // 回合结束后设为待机
    console.log(`--- ${player.general.name} 的回合结束 ---`)
}

/**
 * 执行某一回合阶段对应的操作
 * @param player 执行操作的玩家
 * @param action 要执行的回合阶段操作
 * @param params 给具体执行函数的额外参数
 * @param gameState 游戏状态对象
 */
async function executeStageAction(
    player: Player,
    action: HuiHe,
    params: any = {},
    gameState: Signal<GameState>,
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
            //  TODO: params.decks 应该从 gameState 或者其他地方获取，而不是写死的 {}
            await executeMoPai(player, params as { decks?: Hand[]; gameDecks?: Hand[] })
            break
        case HuiHe.CHU_PAI:
            await executeChuPai(player)
            break
        case HuiHe.QI_PAI:
            // TODO: param: { showOptionDialog: Signal<boolean>; optionDialogText: Signal<string>; discardPile: Hand[] } 应从外部传入
            await executeQiPai(
                player,
                params as {
                    showOptionDialog?: Signal<boolean>
                    optionDialogText?: Signal<string>
                    discardPile?: Hand[]
                    cardsToDiscard?: Hand[]
                },
            ) // params 需要类型断言或正确传递
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
    console.log(`${player.general.name} - 准备阶段`)
    // 实际准备阶段逻辑
    return new Promise(resolve => {
        // 模拟异步操作
        setTimeout(() => {
            console.log(`${player.general.name} - 准备阶段完成`)
            resolve()
        }, 100) // 假设准备阶段需要100ms
    })
}

/** 判定阶段逻辑 */
function executePanDing(player: Player): Promise<void> {
    console.log(`${player.general.name} - 判定阶段`)
    // 实际判定阶段逻辑
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${player.general.name} - 判定阶段完成`)
            resolve()
        }, 300) // 假设判定阶段需要300ms
    })
}

/**
 * 摸牌阶段逻辑
 * @param player 玩家对象
 * @param params 包含被摸牌的指定牌堆的参数对象
 */
function executeMoPai(player: Player, params: { decks?: Hand[]; gameDecks?: Hand[] }): Promise<void> {
    console.log(`${player.general.name} - 摸牌阶段`)
    return new Promise(resolve => {
        // 实际摸牌逻辑
        if (params.gameDecks) {
            drawTheCards(player, params.gameDecks, 2)
            console.log(`${player.general.name} 从牌堆摸了两张牌 (实际效果取决于 drawTheCards 实现)`)
        } else {
            console.warn(`${player.general.name} - 摸牌阶段：未提供牌堆参数 (params.gameDecks)`)
        }
        setTimeout(() => {
            console.log(`${player.general.name} - 摸牌阶段完成`)
            resolve()
        }, 200) // 假设摸牌需要200ms
    })
}

// 出牌阶段逻辑
function executeChuPai(player: Player): Promise<void> {
    console.log(`${player.general.name} - 出牌阶段`)
    // 实际出牌阶段逻辑，可能涉及玩家交互，会比较复杂
    return new Promise(resolve => {
        // 模拟玩家思考和出牌
        const duration = player.isComputer ? 1000 : 3000 // 电脑快一些，玩家慢一些
        console.log(`${player.general.name} 正在出牌... (等待 ${duration}ms)`)
        setTimeout(() => {
            console.log(`${player.general.name} - 出牌阶段完成`)
            resolve()
        }, duration)
    })
}

// 弃牌阶段逻辑
export function executeQiPai(
    player: Player,
    // TODO: 这里的 params 类型需要与实际调用处匹配，目前 executeStageAction 传递的是 {}
    params: {
        showOptionDialog?: Signal<boolean>
        optionDialogText?: Signal<string>
        discardPile?: Hand[]
        cardsToDiscard?: Hand[]
    },
): Promise<void> {
    console.log(`${player.general.name} - 弃牌阶段`)

    return new Promise(resolve => {
        // 手牌数小于等于最大手牌上限（通常是体力值，但武将技能可能改变上限）
        // 假设 player.general.maxHealth 是最大手牌上限
        const maxHand = player.general.currentHealth // 简单处理，通常是当前体力值，也可能是maxHealth
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
        params.showOptionDialog && (params.showOptionDialog.value = true)
        params.optionDialogText &&
            (params.optionDialogText.value = `${player.general.name} 请弃掉 ${discardCount} 张牌`)
        // 此处应该有一个等待玩家操作的机制，例如等待 OptionDialog 的 Promise
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
                if (params.showOptionDialog) params.showOptionDialog.value = false
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
