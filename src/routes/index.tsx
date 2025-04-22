import { component$, useStore, useVisibleTask$, useSignal, } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { General } from '../components/general/general'
import { wujiangArray } from '../data/wujiang-junzheng-biaozhun'
import type { General as WuJiang } from '../data/wujiang-junzheng-biaozhun'
import type { Player } from '../utils/player'
import { createPlayer, } from '../utils/player'
import { MyArea } from '../components/my-area/my-area'
import { Decks } from '../components/decks/decks'
import { initDecks, drawTheCards } from '../utils/game'
import { AskDialogBox } from '../components/ask-dialog-box/ask-dialog-box'

export default component$(() => {
	/** 是否展示选项对话框 */
	const showAskDialog = useSignal(true)
	/** 牌堆 */
	const decks = useStore(initDecks())
	/** 弃牌堆 */
	const discardPile = useStore([])

	/** 其他玩家（电脑） */
	const getOthers = [...wujiangArray.slice(0, 1)].map((wujiang: WuJiang) => {
		return createPlayer(wujiang)
	})
	const otherPlayers: Player[] = useStore(getOthers)
	/** 我（真人玩家） */
	const me: Player = useStore(createPlayer(wujiangArray[2], true))

	const buttons = [
		{
			text: '确认',
			// action: $(() => { })
		},
		{
			text: '取消',
			// action: $(() => { })
		}
	]

	const clickCount = useSignal(0)

	useVisibleTask$(({ track }) => {
		const flag = track(clickCount)
		console.log({ flag })

		if (flag === 0) { return }

		// me.handList.push(...drawTheCards(decks, 4)) // 玩家摸牌
		drawTheCards(me, decks, 4) // 玩家摸牌
		console.log({ me })
	})

	return (
		<main>
			{/* 渲染电脑玩家的武将 */}
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				{
					otherPlayers.map((player, index) => {
						return <General
							key={index}
							wujiang={player.general} isComputer={true} handCount={player.handList.length}
						/>
					})
				}
			</div>

			<Decks deckSize={decks.length} />

			<button onClick$={() => ++clickCount.value}>摸牌</button>

			{showAskDialog.value && <AskDialogBox word='是否开始游戏？' buttons={buttons} />}

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
