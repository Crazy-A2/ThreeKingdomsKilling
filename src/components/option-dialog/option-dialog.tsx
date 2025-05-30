import { component$, $, useContext, type QRL, type Signal } from '@builder.io/qwik'
import type { NotSureObject, Callback } from '../../utils/typedef'
import { targetGeneralListContext } from '../../routes/index'
import type { Player } from '../../utils/player'

interface Button {
    text: string //                         按钮文本
    action: QRL<(arg?: any) => void> //     按钮点击后执行的逻辑
}

export interface OptionDialogProps {
    /** 我 */
    me: Player
    /** 是否展示选项对话框 */
    showOptionDialog: Signal<boolean>
    /** 对话框消息 */
    word: Signal<string>
    /** 按钮数组 */
    buttons?: Button[]
    /** 确认按钮的参数 */
    confirmParam?: NotSureObject
    /** 取消按钮的参数 */
    // cancelParam?: NotSureObject
}

/** 选项对话框 需要玩家（我）行动或响应时展示可选择的选项 */
export const OptionDialog = component$<OptionDialogProps>(({ showOptionDialog, word, me, confirmParam, buttons }) => {
    const targetGeneralList = useContext(targetGeneralListContext)

    const defaultButtons: Button[] = [
        {
            text: '确认',
            action: $((callback?: Callback) => {
                // if (props.me.handList.) return
                callback?.(confirmParam)
            }),
        },
        {
            text: '取消',
            action: $(() => {
                if (Array.isArray(targetGeneralList)) {
                    targetGeneralList.length = 0
                }
            }),
        },
    ]

    // const { showOptionDialog, word, me } = props
    const buttonsToRender = buttons ?? defaultButtons

    // 检查是否有任何手牌被选中
    const isAnyHandChoosed = me.handList.some(hand => hand.isChoosed)

    return (
        // 遮罩层
        // <div
        //     style={{
        //         position: 'fixed',
        //         top: 0,
        //         left: 0,
        //         width: '100%',
        //         height: '100%',
        //         backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //         zIndex: 999,
        //     }}
        // />
        <div
            style={{
                position: 'fixed',
                width: '100%',
                height: 230,
                bottom: 210,
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 999,
            }}
        >
            {/* 对话框消息 */}
            <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>{word}</p>

            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                {/* 选项按钮列表 */}
                {buttonsToRender.map((button, index) => {
                    // 检查是否是确认按钮 (基于默认按钮的假设，或者可以根据 text 判断)
                    const isConfirmButton = button.text === '确认'
                    const isDisabled = isConfirmButton && !isAnyHandChoosed

                    return (
                        <button
                            key={index}
                            style={{
                                // position: 'absolute',
                                // top: '50%',
                                // left: '50%',
                                bottom: 0,
                                // transform: 'translate(-50%, -50%)',
                                margin: '0 10px',
                                padding: '0 10px',
                                backgroundColor: '#e3803d',
                                border: '5px solid #7b503d',
                                borderRadius: '10px',
                                zIndex: 1000,
                                opacity: isDisabled ? 0.5 : 1, // 根据是否禁用设置透明度
                            }}
                            disabled={isDisabled} // 设置按钮的 disabled 状态
                            onClick$={async () => {
                                showOptionDialog.value = false
                                await button.action()
                            }}
                        >
                            {button.text}
                        </button>
                    )
                })}
            </div>
        </div>
    )
})
