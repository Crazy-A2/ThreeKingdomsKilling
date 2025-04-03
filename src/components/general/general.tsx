import { component$, useStore } from '@builder.io/qwik'
import { wujiangArray, themeColor } from '../../data/wujiang-junzheng-biaozhun';

export interface GeneralProps { }

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
export const General = component$<GeneralProps>(() => {
  // const liubei = `${import.meta.env.BASE_URL}image/general/界刘备.png`
  // const sunquan = `${import.meta.env.BASE_URL}image/general/界孙权.png`

  // 720p
  const width = 160
  const height = 205

  // 1080p
  // const width = 240
  // const height = 307.5

  // 势力
  // 名字
  // 体力
  const wujiangList = [wujiangArray[0], wujiangArray[2]]

  return (
    <>
      <div>General component works!</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {wujiangList.map((element, index) => {
          return (
            <div
              style={{
                key: { index },
                width,
                height,
                backgroundImage: `url(${import.meta.env.BASE_URL}image/general/${element.name}.png)`,
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
                backgroundColor: themeColor.get(element.country),
              }}>
                <div style={{ color: 'black', textAlign: 'center' }}>{element.name}</div>

                <HealthBar maxHealth={element.maxHealth} currentHealth={element.currentHealth} />
              </div>
            </div>
          )
        })}
      </div>

    </>
  )
})


// 考虑血条上限和当前血量
// 方案1
// 渲染两组血条 （当前血量，最大血量）
// 当前血量用颜色填充，最大血量用灰色填充
// 方案2
// 渲染一组血条，用颜色填充当前血量
// 用灰色填充剩余血量
export interface HealthBarProps { maxHealth: number, currentHealth: number }

export const HealthBar = component$<HealthBarProps>((props) => {

  const healthArray: number[] = useStore(new Array(+props.maxHealth).fill(0))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 5 }}>
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
    </div >
  )
})
