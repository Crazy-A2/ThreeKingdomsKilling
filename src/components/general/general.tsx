import { component$, type CSSProperties, useStore, useVisibleTask$ } from '@builder.io/qwik'
import { themeColor } from '../../data/wujiang-junzheng-biaozhun'
import type { General as WuJiang } from '../../data/wujiang-junzheng-biaozhun'
// import type { Player } from '../../utils/player'

export interface GeneralProps {
    wujiang: WuJiang
    isComputer?: boolean
    handCount?: number
}

/**
 * 武将组件 渲染游戏对局内的武将牌
 * 
 * 720p（最低分辨率）
 * 
 * 160 * 205 px
 * 
 * 1080p（PC最常见分辨率）
 * 
 * 240 * 307.5 px
 */
export const General = component$<GeneralProps>(props => {
    // 720p
    const width = 160
    const height = 205

    // 1080p
    // const width = 240
    // const height = 307.5

    return (
        <div
            style={{
                width,
                height,
                backgroundImage: `url(${import.meta.env.BASE_URL}image/general/${props.wujiang.name}/1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%', width: '15%',
                    borderTopLeftRadius: '15px',
                    borderBottomLeftRadius: '15px',
                    backgroundColor: themeColor.get(props.wujiang.country),
                }}
            >
                {/* 武将名 */}
                <div style={{ color: 'black', textAlign: 'center', lineHeight: 1.2, }}>{props.wujiang.name}</div>

                <div
                    style={{ position: 'relative', height: '80px', paddingBottom: 10 }}
                >
                    {/* 血条（体力条） */}
                    <HealthBar maxHealth={props.wujiang.maxHealth} currentHealth={props.wujiang.currentHealth} />

                    {/* 手牌计数 */}
                    {
                        props.isComputer &&
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                color: 'black',
                                fontSize: 'larger',
                                lineHeight: 1.8,
                                fontWeight: 900,
                                textAlign: 'center',
                                left: -6,
                                bottom: -18,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(${import.meta.env.BASE_URL}image/icon/handcard.png)`,
                                position: 'absolute',
                            }}
                        >
                            {props.handCount || 0}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
})

export interface HealthBarProps { maxHealth: number, currentHealth: number }

const HealthBar = component$<HealthBarProps>((props) => {
    // + 用来预防传入字符串的情况
    const healthArray = useStore(new Array(+props.maxHealth).fill(0))

    useVisibleTask$(() => {
        // 根据当前血量改变勾玉颜色
        healthArray.fill(
            `${(+props.currentHealth === +props.maxHealth)
                ? 3
                : props.currentHealth > 1
                    ? 2
                    : props.currentHealth}`,
            0, +props.currentHealth
        )
    })

    return (
        <div style={healthBar}>
            {
                healthArray.map((el, index) => {
                    return <img
                        key={index}
                        style={{ width: '60%' }}
                        src={`${import.meta.env.BASE_URL}image/magatama/${el}.png`}
                        alt='勾玉'
                    />
                })
            }
        </div>
    )
})

const healthBar: CSSProperties = {
    display: 'flex',
    flexDirection: 'column-reverse', // 让有颜色的勾玉从下面开始渲染
    alignItems: 'center',
    paddingBottom: 5,
}
