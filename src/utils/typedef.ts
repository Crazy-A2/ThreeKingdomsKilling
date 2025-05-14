import type { Player } from './player'
import type { Hand } from '../data/hands'

/** 成员不确定的对象 */
export type NotSureObject = Record<string, any>

/** 任意参数，任意返回值的函数类型 */
export type AnyFunction = (...args: any[]) => any

/** 通用 技能参数接口 */
export interface SkillCommonParam {
    /** 技能使用者 */
    user: Player
    /** 技能目标 */
    target?: Player
    /** 弃牌堆 */
    discardPile: Hand[]
}
