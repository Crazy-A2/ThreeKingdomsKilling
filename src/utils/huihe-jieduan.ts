// 回合阶段
// 定义表示每个回合阶段状态的枚举
export enum HuiHe {
	ZHUN_BEI, //        准备阶段
	PAN_DING, //        判定阶段
	MO_PAI, //          摸牌阶段
	CHU_PAI, //         出牌阶段
	QI_PAI, //          弃牌阶段
	JIE_SHU, //         结束阶段
	DAI_JI, //         	回合外待机状态
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