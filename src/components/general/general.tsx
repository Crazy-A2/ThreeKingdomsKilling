import { component$, useStore } from '@builder.io/qwik'
import { themeColor, type Country } from '../../data/wujiang-junzheng-biaozhun';

export interface GeneralProps {
  wujiang: { name: string, country: Country, maxHealth: number, currentHealth: number }
}

/**
 * 武将组件 渲染游戏对局内的武将牌
 * 
 * 720p（最低分辨率）
 * 
 * 160 * 205
 * 
 * 1080p（PC最常见分辨率）
 * 
 * 240 * 307.5
 */
export const General = component$<GeneralProps>(props => {
  // 720p
  const width = 160
  const height = 205

  // 1080p
  // const width = 240
  // const height = 307.5

  return (
    <>
      {/* <div>General component works!</div> */}
      <div
        style={{
          width,
          height,
          backgroundImage: `url(${import.meta.env.BASE_URL}image/general/${props.wujiang.name}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', width: '15%',
          backgroundColor: themeColor.get(props.wujiang.country),
        }}>
          {/* 武将名 */}
          <div style={{ color: 'black', textAlign: 'center', lineHeight: 1.2, }}>{props.wujiang.name}</div>

          {/* 血条（体力条） */}
          <HealthBar maxHealth={props.wujiang.maxHealth} currentHealth={props.wujiang.currentHealth} />
          {/* 测试 */}
          {/* <HealthBar maxHealth='3' currentHealth='3' /> */}
        </div>
      </div>
    </>
  )
})

export interface HealthBarProps { maxHealth: number, currentHealth: number }

const HealthBar = component$<HealthBarProps>((props) => {
  const healthArray = useStore(new Array(+props.maxHealth).fill(0))
  // healthArray.splice(+props.currentHealth, props.maxHealth - +props.currentHealth, 'glass3')
  // 根据当前血量改变勾玉颜色
  healthArray.fill(
    `${(+props.currentHealth === +props.maxHealth)
      ? 3
      : props.currentHealth > 1
        ? 2
        : props.currentHealth}`,
    0, +props.currentHealth
  )

  // 测试
  // console.log(props.currentHealth, props.maxHealth, healthArray)
  // console.log('+props.currentHealth > 3', +props.currentHealth > 3)
  // console.log('+props.currentHealth === +props.maxHealth', +props.currentHealth === +props.maxHealth)

  return (
    <>
      <div style={healthBar}>
        {
          healthArray.map((el, index) => {
            return <img
              key={index}
              style={{ width: '60%' }}
              src={`${import.meta.env.BASE_URL}image/icon/${el}.png`}
              alt='勾玉'
            />
          })
        }
      </div>
    </>
  )
})

const healthBar = {
  display: 'flex',
  flexDirection: 'column-reverse', // 让有颜色的勾玉从下面开始渲染
  alignItems: 'center',
  paddingBottom: 5,
}
