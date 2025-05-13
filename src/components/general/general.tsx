import { component$, type CSSProperties, useStore, useVisibleTask$, useContext } from '@builder.io/qwik'
import { themeColor } from '../../data/general/界限突破'
import type { General as WuJiang } from '../../data/general/界限突破'
import { addTargetGeneral2List, removeTargetGeneralFromList } from '../../utils/player'
import { targetGeneralListContext } from '../../routes/index'

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

    const targetGeneralList = useContext(targetGeneralListContext)

    return (
        <div
            style={{
                width, height,
                backgroundImage: `url(${import.meta.env.BASE_URL}image/general/${props.wujiang.name}/1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
            }}
            onClick$={() => {
                !targetGeneralList.includes(props.wujiang.name)
                    ? addTargetGeneral2List(props.wujiang.name, targetGeneralList)
                    : removeTargetGeneralFromList(props.wujiang.name, targetGeneralList)
                console.log({ targetGeneralList })
            }}
            stoppropagation:click
        >
            {/* 左侧属性条 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%', width: '15%',
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px',
                paddingTop: '5px',
                backgroundColor: themeColor.get(props.wujiang.country),
            }}>
                {/* 武将名 */}
                <div style={{ color: 'black', textAlign: 'center', lineHeight: 1.2, }}>{props.wujiang.name}</div>

                <div style={{ position: 'relative', height: '80px', paddingBottom: 10 }}>
                    <HealthBar maxHealth={props.wujiang.maxHealth} currentHealth={props.wujiang.currentHealth} />

                    {/* 手牌计数 */}
                    {
                        props.isComputer &&
                        <div style={{
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
                        }}>
                            {props.handCount || 0}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
})

export interface HealthBarProps { maxHealth: number, currentHealth: number }

/** 血条（体力条） */
const HealthBar = component$<HealthBarProps>((props) => {
    // + 用来预防传入字符串的情况
    // Initialize with string '0' for consistency with image names (0.png)
    const healthArray = useStore(new Array(+props.maxHealth).fill('0'))

    useVisibleTask$(({ track }) => { // Add track for explicit dependency tracking
        track(() => props.currentHealth);
        track(() => props.maxHealth);

        const currentHp = +props.currentHealth;
        const maxHp = +props.maxHealth;

        // 1. Reset all health pips to '0' (empty/default state)
        // This ensures that when health decreases, previously active pips are cleared.
        for (let i = 0; i < healthArray.length; i++) {
            healthArray[i] = '0';
        }
        // An alternative for resetting if array length is fixed: healthArray.fill('0');

        // 2. Determine the icon type for active health pips based on current health
        let activeIconType = '0'; // Default to '0' (e.g., for 0 or negative HP)
        if (currentHp > 0) {
            if (currentHp >= maxHp) { // Use >= to handle cases where currentHp might exceed maxHp
                activeIconType = '3'; // Full health icon (e.g., green)
            } else if (currentHp > 1) {
                activeIconType = '2'; // Injured icon (e.g., yellow)
            } else { // currentHp === 1
                activeIconType = '1'; // Critical/Low health icon (e.g., red)
            }
        }

        // 3. Set the state for active health pips
        // Fill elements from index 0 up to currentHp - 1 with the active icon type
        for (let i = 0; i < currentHp; i++) {
            // Boundary check, although currentHp should ideally not exceed maxHp (healthArray.length)
            if (i < healthArray.length) {
                healthArray[i] = activeIconType;
            }
        }
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
