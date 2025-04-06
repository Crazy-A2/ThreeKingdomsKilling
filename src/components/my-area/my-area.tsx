import { component$ } from '@builder.io/qwik';
import type { General as WuJiang } from '../../data/wujiang-junzheng-biaozhun'
import { wujiangArray } from '../../data/wujiang-junzheng-biaozhun'
import type { Hand as ShouPai } from '../../data/shoupai-junzheng'
import type { Player } from '../../utils/player'
import { General } from '../general/general'





export interface MyAreaProps {
  // general: WuJiang // 武将
  // handList: ShouPai[] // 手牌列表
  player: Player // 玩家对象
}

export const MyArea = component$<MyAreaProps>((props) => {
  return (
    <div>
      MyArea component works!
      {/* 手牌区 */}
      <div style={{ display: 'flex', alignItems: 'center' }}></div>
      {/* 技能区 */}
      <div></div>

      {/* 武将牌 */}
      <General wujiang={props.player.general} />
      {/* 测试 */}
      {/* <General wujiang={wujiangArray[0]} /> */}

    </div>
  )
})
