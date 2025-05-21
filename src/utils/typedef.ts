import type { Player } from './player'
import type { Hand } from '../data/hands'
import { type Signal } from '@builder.io/qwik'

/** 成员不确定的对象 */
export type NotSureObject = Record<string, any>

/** 任意参数，任意返回值的函数类型 */
export type AnyFunction = (...args: any[]) => any

/** 回调函数类型 */
export type Callback = (param?: NotSureObject) => void

/** 通用 技能参数接口 */
export interface SkillCommonParam {
    /** 技能使用者 */
    user: Player
    /** 技能目标 */
    target?: Player
    /** 弃牌堆 */
    discardPile: Hand[]
}

/** 游戏通用参数 */
export interface GameCommonParam {
    /** 牌堆 */
    decks: Hand[]
    /** 是否显示选项对话框 */
    showOptionDialog?: Signal<boolean>
    /** 选项对话框文本 */
    optionDialogText?: Signal<string>
    /** 弃牌堆 */
    discardPile?: Hand[]
    /** 需要弃掉的牌 */
    cardsToDiscard?: Hand[]
}
