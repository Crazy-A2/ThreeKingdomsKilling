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

export default component$(() => {
	/** 牌堆 */
	const decks = useStore(initDecks())
	/** 弃牌堆 */
	const discardPile = useStore([])
	/** 测试 其他玩家 */
	const otherPlayers: WuJiang[] | Player[] = useStore([...wujiangArray.slice(0, 1)])
	otherPlayers.forEach((element: WuJiang | Player, index) => {
		// element.handList.push(...drawTheCards(decks, 4)) // 玩家摸牌
		element = createPlayer(element as WuJiang)
		console.log({ element, index })
	})

	const me: Player = useStore(createPlayer(wujiangArray[2]))

	const clickCount = useSignal(0)

	useVisibleTask$(({ track }) => {
		const flag = track(clickCount)
		console.log({ flag })

		if (flag === 0) { return }

		me.handList.push(...drawTheCards(decks, 4)) // 玩家摸牌
		console.log({ me })
	})

	return (
		<main>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				{
					otherPlayers.map((element, index) => {
						return <General wujiang={element} key={index} />
					})
				}
			</div>

			<Decks deckSize={decks.length} />

			<button onClick$={() => ++clickCount.value}>摸牌</button>

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
