import { component$, useStore, useVisibleTask$, useSignal, createContextId, useContextProvider } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { General } from '../components/general/general'
import { wujiangArray } from '../data/general/界限突破'
import type { General as WuJiang } from '../data/general/界限突破'
import type { Player } from '../utils/player'
import { createPlayer } from '../utils/player'
import { MyArea } from '../components/my-area/my-area'
import { Decks } from '../components/decks/decks'
import { OptionDialog } from '../components/option-dialog/option-dialog'
import { HandSkill } from '../utils/hand-skills'
import { executeGameLoop, GameState } from '../utils/game'
import { initDeck, drawTheCardsIf, drawTheCards } from '../utils/card'
import { type Hand } from '../data/hands'

export const targetGeneralListContext = createContextId<string[]>('targetGeneralList')

export default component$(() => {
    /** 选项对话框的开关 */
    const showOptionDialog = useSignal(true)
    /** 牌堆 */
    const decks = useStore(initDeck())
    /** 弃牌堆 */
    const discardPile = useStore([])
    /** 游戏轮数 */
    const gameRound = useSignal(1)
    /** 游戏状态 */
    const gameState = useSignal(GameState.NOT_STARTED)

    /** 其他玩家（电脑） */
    const getOthers = [...wujiangArray.slice(0, 1)].map((wujiang: WuJiang) => {
        return createPlayer(wujiang)
    })
    const otherPlayers: Player[] = useStore(getOthers)
    /** 我（真人玩家） */
    const me: Player = useStore(createPlayer(wujiangArray[2], false))

    /** 目标武将列表 */
    const targetGeneralList: string[] = useStore([])
    useContextProvider(targetGeneralListContext, targetGeneralList)

    // 初始化游戏循环
    useVisibleTask$(async () => {
        const allPlayers = [me, ...otherPlayers]
        // await executeGameLoop(allPlayers, gameRound, gameState)
    })

    return (
        <main>
            {/* 渲染除我以外的玩家武将 */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {otherPlayers.map((player, index) => {
                    return (
                        <General
                            key={index}
                            wujiang={player.general}
                            isComputer={true}
                            handCount={player.handList.length}
                        />
                    )
                })}
            </div>

            <Decks deckSize={decks.length} />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick$={() => {
                        drawTheCards(me, decks)
                    }}
                >
                    摸牌
                </button>
                <button onClick$={() => {}}>弃牌</button>
                {/* <button onClick$={() => gameState.value = GameState.OVER}>结束游戏</button> */}
                {/* <button onClick$={() => { HandSkill.tao(me, discardPile) }}>吃桃</button> */}
                {/* <button onClick$={() => { drawTheCardsIf(me, decks, (item: Hand) => item.name === 'sha') }}>摸杀</button>
				<button onClick$={() => { HandSkill.sha({ user: me, target: otherPlayers[0], discardPile })  }}>出杀</button> */}
            </div>

            {showOptionDialog.value && <OptionDialog showOptionDialog={showOptionDialog} word="请选择目标" />}

            <MyArea player={me} />
        </main>
    )
})

// 定义该页面头部信息
export const head: DocumentHead = {
    title: '三国杀！！！！！！！！！',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
