// 回合阶段
// 定义表示每个回合阶段状态的枚举
export enum RoundPhase {
	ZHUN_BEI, //        准备阶段
	PAN_DING, //        判定阶段
	MO_PAI, //          摸牌阶段
	CHU_PAI, //         出牌阶段
	QI_PAI, //          弃牌阶段
	JIE_SHU, //         结束阶段
}

// 定义玩家回合内每个阶段的逻辑
