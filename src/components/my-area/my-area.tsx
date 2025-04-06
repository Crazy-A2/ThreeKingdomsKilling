import { component$, useStore } from '@builder.io/qwik';
// import type { General as WuJiang } from '../../data/wujiang-junzheng-biaozhun'
import { SkillType, TriggerTiming } from '../../data/wujiang-junzheng-biaozhun'
// import type { Hand as ShouPai } from '../../data/shoupai-junzheng'
import type { Player } from '../../utils/player'
import { General } from '../general/general'

export interface MyAreaProps {
  // general: WuJiang // 武将
  // handList: ShouPai[] // 手牌列表
  player: Player // 玩家对象
}

/** 我的区域（真人玩家操控）*/
export const MyArea = component$<MyAreaProps>((props) => {
  return (
    <div style={{
      display: 'flex', width: '100%', flexDirection: 'row-reverse', position: 'fixed', bottom: 0
    }}>
      <General wujiang={props.player.general} />

      <SkillArea />

      <HandArea />
    </div>
  )
})

interface SkillAreaProps { }

/** 技能区 */
const SkillArea = component$<SkillAreaProps>(() => {
  // 测试
  const skillList = useStore([
    {
      name: '仁德',
      // type: SkillType.PU_TONG,
      type: SkillType.JIN_YONG,
      triggerTiming: TriggerTiming.CHU_PAI,
      do: '',
    },
    {
      name: '激将',
      type: SkillType.BEI_DONG,
      triggerTiming: TriggerTiming.SHI_YONG_HUO_DA_CHU,
      do: '',
    },
  ])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column-reverse', alignItems: 'center',
      width: 100, backgroundColor: 'red'
    }}>
      {
        skillList.map((skill, index) => {
          return (
            <button key={index}
              style={{
                width: 87, height: 47,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
  return <div style={{ display: 'flex', alignItems: 'center', flex: 1, backgroundColor: 'yellow' }}>手牌区</div>
})