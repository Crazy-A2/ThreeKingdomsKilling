import type { Hand } from '../data/shoupai-junzheng'
import type { General, Skill } from '../data/wujiang-junzheng-biaozhun'
import { HuiHe } from './huihe-jieduan'

/**
 * 定义玩家对象
 */
export class Player {
	general: General //                         玩家使用的武将
	handList: Hand[] = [] //                    玩家手牌列表
	skillsList: Skill[] = [] //                 玩家技能列表
	currentState: HuiHe = HuiHe.DAI_JI //       当前所处的回合阶段
	//  TODO 装备区

	constructor(general: General) {
		this.general = general
		this.skillsList = general.skills
	}
}
