import { component$, useStore } from '@builder.io/qwik'
import type { Skill } from '../../data/wujiang-junzheng-biaozhun'
import { SkillType, TriggerTiming } from '../../data/wujiang-junzheng-biaozhun'
// import type { Hand as ShouPai } from '../../data/shoupai-junzheng'
import type { Player } from '../../utils/player'
import { General } from '../general/general'
// import { playerContext } from '../../routes/index'

import { shoupaiArray } from '../../data/shoupai-junzheng'
import { Hand } from '../hand/hand'

export interface MyAreaProps {
    player: Player // 玩家对象
}

/** 我的区域（真人玩家操控）*/
export const MyArea = component$<MyAreaProps>((props) => {
    // const player = useContext(playerContext)
    return (
        <div style={{ display: 'flex', width: '100%', position: 'fixed', bottom: 0 }}>
            <General wujiang={props.player.general} />

            <SkillArea skillList={props.player.skillList}/>

            <HandArea />
        </div>
    )
})

interface SkillAreaProps { 
    skillList: Skill[] // 技能列表
}

/** 技能区 */
const SkillArea = component$<SkillAreaProps>(({skillList}) => {
    // 测试
    // const skillList = useStore([
    //     {
    //         name: '仁德',
    //         // type: SkillType.PU_TONG,
    //         type: SkillType.JIN_YONG,
    //         triggerTiming: TriggerTiming.CHU_PAI,
    //         do: '',
    //     },
    //     {
    //         name: '激将',
    //         type: SkillType.BEI_DONG,
    //         triggerTiming: TriggerTiming.SHI_YONG_HUO_DA_CHU,
    //         do: '',
    //     },
    // ])

    return (
        <div style={{
            display: 'flex', flexDirection: 'column-reverse', alignItems: 'center',
            width: 100, backgroundColor: 'red'
        }}>
            {
                skillList.map((skill, index) => {
                    return (
                        <button
                            key={index}
                            style={{
                                width: 87, height: 47, backgroundSize: 'cover', backgroundPosition: 'center',
                                backgroundImage: `url(${import.meta.env.BASE_URL}image/skill/${skill.type}.png)`,
                            }}
                        >
                            {skill.name}
                        </button>
                    )
                })
            }
        </div>
    )
})

interface HandAreaProps { }

/** 手牌区 */
const HandArea = component$<HandAreaProps>(() => {
    const shoupaiList = useStore(shoupaiArray.slice(9, 13))

    return (
        <div
            style={{
                display: 'flex', alignItems: 'end', flex: 1,
                overflowX: 'auto',
                backgroundColor: 'yellow',
            }}
            onClick$={() => { alert('手牌区被点击了！！！'); shoupaiList.push(shoupaiArray[14]) }}
        >
            {
                shoupaiList.map((hand, index) => {
                    return <Hand hand={hand} key={index} />
                })
            }
        </div>
    )
})