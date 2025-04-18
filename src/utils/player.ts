import type { Hand } from '../data/shoupai-junzheng'
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
	//  TODO 装备区
	// materielList
}

/**
 * 创建玩家对象
 * @param general 玩家使用的武将对象
 * @param isComputer 该玩家是否为电脑
 * @returns
 */
export function createPlayer(general: General, isComputer = false): Player {
	return {
		isComputer,
		general,
		handList: [],
		skillList: general.skills,
		currentState: HuiHe.DAI_JI,
	}
}

export function changePlayerGeneral(player: Player, general: General) {
	player.general = general
	player.skillList = general.skills
}
