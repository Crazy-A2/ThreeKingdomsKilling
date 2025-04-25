import type { Player } from './player'
import { drawTheCards } from './card'
import type { Hand } from '../data/ShouPai-JunZheng'

/**表示每个回合阶段的枚举 */
export enum HuiHe {
	DAI_JI, //         	回合外待机状态
	ZHUN_BEI, //        准备阶段
	PAN_DING, //        判定阶段
	MO_PAI, //          摸牌阶段
	CHU_PAI, //         出牌阶段
	QI_PAI, //          弃牌阶段
	JIE_SHU, //         结束阶段
}

/**
 * 回合阶段状态数组
 * @description 包含了回合内的各个阶段状态，方便进行状态转换和操作
 */
export const roundStateArray: HuiHe[] = [
	HuiHe.DAI_JI,
	HuiHe.ZHUN_BEI,
	HuiHe.PAN_DING,
	HuiHe.MO_PAI,
	HuiHe.CHU_PAI,
	HuiHe.QI_PAI,
	HuiHe.JIE_SHU,
]

/**
 * 执行某一回合阶段对应的操作
 * @param action 要执行的回合阶段操作
 * @param player 执行操作的玩家
 * @param params 给具体执行函数的额外参数
 */
export function executeRoundAction(
	action: HuiHe,
	player: Player,
	// params: Object = {}
	params: any = {}
): boolean {
	let result = false
	switch (action) {
		case HuiHe.ZHUN_BEI:
			result = executeZhunBei(player)
			break
		case HuiHe.PAN_DING:
			result = executePanDing(player)
			break
		case HuiHe.MO_PAI:
			result = executeMoPai(player, params)
			break
		case HuiHe.CHU_PAI:
			result = executeChuPai(player)
			break
		case HuiHe.QI_PAI:
			result = executeQiPai(player)
			break
		case HuiHe.JIE_SHU:
			result = executeJieShu(player)
			break
		case HuiHe.DAI_JI:
			console.log('回合外待机状态')
			break
		default:
			console.log('action 参数错误')
	}
	return result
}

// 准备阶段逻辑
function executeZhunBei(player: Player): boolean {
	console.log('准备阶段')
	return false
}

// 判定阶段逻辑
function executePanDing(player: Player): boolean {
	console.log('判定阶段')
	return false
}

/**
 * 摸牌阶段逻辑
 * @param player 玩家对象
 * @param params 包含被摸牌的指定牌堆的参数对象
 * @returns
 */
function executeMoPai(player: Player, params: { decks: Hand[] }): boolean {
	console.log('摸牌阶段')
	// player.handList.push(...drawTheCards(params.decks))
	drawTheCards(player, params.decks)
	return true
}

// 出牌阶段逻辑
function executeChuPai(player: Player): boolean {
	console.log('出牌阶段')
	return false
}

// 弃牌阶段逻辑
function executeQiPai(player: Player): boolean {
	console.log('弃牌阶段')
	if (player.handList.length <= player.general.currentHealth) {
		return true
	}
	// 手牌数量大于当前体力值，需弃掉多出的手牌
	const discardCount = player.handList.length - player.general.currentHealth

	// TODO 需要确认对话框组件
	console.log(`还需弃掉 ${discardCount} 张牌`)
	qiPai(player, discardCount)
	return true
}

// 结束阶段逻辑
function executeJieShu(player: Player): boolean {
	console.log('结束阶段')
	return false
}

function qiPai(player: Player, discardCount: number): boolean {
	// player.handList.splice(0, discardCount)
	return false
}

// 定义玩家回合内每个阶段的逻辑
// class LinearStateMachine {
// 	constructor() {
// 	  this.states = Object.freeze({
// 		S1: 'S1',
// 		S2: 'S2',
// 		S3: 'S3',
// 		S4: 'S4',
// 		S5: 'S5',
// 		S6: 'S6'
// 	  });

// 	  this.transitions = Object.freeze({
// 		[this.states.S1]: this.states.S2,
// 		[this.states.S2]: this.states.S3,
// 		[this.states.S3]: this.states.S4,
// 		[this.states.S4]: this.states.S5,
// 		[this.states.S5]: this.states.S6,
// 		[this.states.S6]: null // 终态
// 	  });

// 	  this.currentState = this.states.S1;
// 	}

// 	// 转移到下一个状态
// 	next() {
// 	  const nextState = this.transitions[this.currentState];
// 	  if (nextState) {
// 		console.log(`从 ${this.currentState} 转换到 ${nextState}`);
// 		this.currentState = nextState;
// 		return true;
// 	  }
// 	  console.log('当前已是最终状态');
// 	  return false;
// 	}

// 	// 获取当前状态
// 	getState() {
// 	  return this.currentState;
// 	}

// 	// 重置状态机
// 	reset() {
// 	  this.currentState = this.states.S1;
// 	  console.log('重置状态到 S1');
// 	}
//   }

//   // 使用示例
//   const sm = new LinearStateMachine();

//   // 正常流程
//   sm.next(); // S1 -> S2
//   sm.next(); // S2 -> S3
//   sm.next(); // S3 -> S4
//   sm.next(); // S4 -> S5
//   sm.next(); // S5 -> S6
//   sm.next(); // 已经是最终状态

//   // 重置测试
//   sm.reset();
//   console.log('当前状态:', sm.getState()); // S1
