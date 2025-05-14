import { component$ } from '@builder.io/qwik'
import type { Skill } from '../../data/general/界限突破'
import type { Hand as ShouPai } from '../../data/hands'
import type { Player } from '../../utils/player'
import { General } from '../general/general'

import { Hand } from '../hand/hand'

export interface MyAreaProps {
    player: Player // 玩家对象
}

/** 我的区域（真人玩家操控）*/
export const MyArea = component$<MyAreaProps>(({ player }) => {
    return (
        <div style={{ display: 'flex', width: '100%', position: 'fixed', bottom: 0 }}>
            <General wujiang={player.general} />

            <SkillArea skillList={player.skillList} />

            <HandArea handList={player.handList} handCeiling={player.general.maxHealth} />
        </div>
    )
})

interface SkillAreaProps {
    skillList: Skill[] // 技能列表
}

/** 技能区 */
const SkillArea = component$<SkillAreaProps>(({ skillList }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                width: 100,
                backgroundColor: 'red',
            }}
        >
            {skillList.map((skill, index) => {
                return (
                    <button
                        key={index}
                        style={{
                            width: 87,
                            height: 47,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${import.meta.env.BASE_URL}image/skill/${skill.type}.png)`,
                        }}
                    >
                        {skill.name}
                    </button>
                )
            })}
        </div>
    )
})

interface HandAreaProps {
    /** 玩家的所有手牌组成的数组 */
    handList: ShouPai[]
    /** 手牌上限（一般等于体力值） */
    handCeiling: number
}

/** 手牌区 */
const HandArea = component$<HandAreaProps>(props => {
    // TODO BUG 手牌长度溢出时无法滚动 每张手牌仅渲染部分
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'end',
                flex: 1,
                overflowX: 'scroll',
                backgroundColor: 'yellow',
            }}
            onClick$={() => {
                alert('手牌区被点击了！！！')
            }}
        >
            {props.handList.map((hand, index) => {
                return <Hand hand={hand} key={index} />
            })}

            {/* 手牌计数 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    zIndex: 2,
                    fontSize: 36,
                    color: 'white',
                }}
            >
                {/* 当前手牌数 / 手牌上限 */}
                {`${props.handList.length} / ${props.handCeiling}`}
            </div>
        </div>
    )
})
