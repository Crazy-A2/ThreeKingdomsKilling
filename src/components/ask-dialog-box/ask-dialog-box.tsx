import { component$, } from '@builder.io/qwik';

interface Button {
    text: string //                 按钮文本
    action?: () => void //          点击按钮后执行的操作
}

export interface AskDialogBoxProps {
    word: string //                 对话框消息
    buttons: Button[] //            按钮列表
}

/** 请求对话框 需要玩家（我）行动或响应时展示可选择的选项 */
export const AskDialogBox = component$<AskDialogBoxProps>(({ word, buttons = [] }) => {
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
        <div style={{
            position: 'fixed',
            width: '100%',
            bottom: 210,
            height: 150,
            textAlign: 'center',
            backgroundColor: 'rgba(94, 254, 201, 0.5)',
            zIndex: 999,
        }}>
            {/* 对话框消息 */}
            <p style={{
                fontSize: '1.4rem',
                fontWeight: 700,
            }}>
                {word}
            </p>

            <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                {/* 选项按钮列表 */}
                {
                    buttons.map((button, index) => {
                        return <button key={index}
                            // onClick$={$(button.action)}
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
                        >
                            {button.text}
                        </button>
                    })
                }
            </div>
        </div>
    )
})
