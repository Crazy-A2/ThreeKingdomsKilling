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

            <HandArea handList={player.handList} />
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
    handList: ShouPai[]
    ceiling: number
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

            <div>
                {
                    // ` / ${}`
                }
            </div>
        </div>
    )
})
