import type { Hand } from '../data/ShouPai-JunZheng'
import type { General, Skill } from '../data/wujiang-junzheng-biaozhun'
import { HuiHe } from './round-stage'

/**
 * 定义玩家对象
 */
export interface Player {
	isComputer: boolean // 						玩家是否为电脑
	general: General //                         玩家使用的武将
	handList: Hand[] //                    		玩家手牌列表
	skillList: Skill[] //                  		玩家技能列表
	currentState: HuiHe //       				当前所处的回合阶段
	drinkingCount: number // 					当前回合喝酒的次数
	//  TODO 装备区
	// materielList
}

/**
 * 创建玩家对象
 * @param general 玩家使用的武将对象
 * @param isComputer 该玩家是否为电脑
 * @returns 玩家对象
 */
export function createPlayer(general: General, isComputer = false): Player {
	return {
		isComputer,
		general,
		drinkingCount: 0,
		handList: [],
		skillList: general.skills,
		currentState: HuiHe.DAI_JI,
	}
}

// export function changePlayerGeneral(player: Player, general: General) {
// 	player.general = general
// 	player.skillList = general.skills
// }

/**
 * 将目标玩家的武将名添加到目标武将列表中
 * @param generalName 选中玩家的武将名
 * @param targetGeneralList 目标玩家所使用武将的列表
 */
export function addTargetGeneral2List(
	generalName: string,
	targetGeneralList: string[]
) {
	targetGeneralList.includes(generalName) || targetGeneralList.push(generalName)
}

// /**
//  * 获取目标玩家的索引
//  * @param playerList 玩家列表
//  * @param targetPlayer 目标玩家
//  * @returns 目标玩家的索引，如果不存在则返回 0
//  */
// export function getTargetPlayerIndex(
// 	playerList: Player[],
// 	targetPlayer: Player
// ) {}

/**
 * 取消选中目标武将
 * @param generalName 要取消选中的武将名
 * @param targetGeneralList 目标武将列表
 */
export function removeTargetGeneralFromList(
	generalName: string,
	targetGeneralList: string[]
): void {
	const index = targetGeneralList.indexOf(generalName)
	index !== -1 && targetGeneralList.splice(index, 1)
}
