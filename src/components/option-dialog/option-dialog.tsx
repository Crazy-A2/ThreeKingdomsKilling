import { component$, $, useContext, type QRL, type Signal } from '@builder.io/qwik'
import type { NotSureObject } from '../../utils/game'
import { targetGeneralListContext } from '../../routes/index'

interface Button {
    text: string //                         按钮文本
    action: QRL<(arg?: any) => void> //     按钮点击后执行的逻辑
}

export interface OptionDialogProps {
    showOptionDialog: Signal<boolean> //    是否展示选项对话框
    word: string //                         对话框消息
    buttons?: Button[] //                   按钮列表
}

/** 选项对话框 需要玩家（我）行动或响应时展示可选择的选项 */
export const OptionDialog = component$<OptionDialogProps>((props) => {
    const targetGeneralList = useContext(targetGeneralListContext)

    const defaultButtons: Button[] = [
        {
            text: '确认',
            action: $((callback?: (param?: NotSureObject) => void, param?: NotSureObject) => {
                callback?.(param)
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

    const { showOptionDialog, word } = props
    const buttonsToRender = props.buttons ?? defaultButtons

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
                            }}
                            onClick$={async () => {
                                showOptionDialog.value = false
                                if (button.action) {
                                    await button.action()
                                }
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
