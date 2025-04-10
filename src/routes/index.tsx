import { component$, useStore, useVisibleTask$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { General } from '../components/general/general'
import { wujiangArray } from '../data/wujiang-junzheng-biaozhun'
import type { General as WuJiang } from '../data/wujiang-junzheng-biaozhun'
import type { Player } from '../utils/player'
import { createPlayer, changePlayerGeneral } from '../utils/player'
import { MyArea } from '../components/my-area/my-area'
import { Decks } from '../components/decks/decks'

// export const playerContext = createContextId<Player>('playerContext')

export default component$(() => {
	const wujiangList: WuJiang[] = useStore([wujiangArray[0], wujiangArray[2]])

	// const shoupaiList: ShouPai[] = useStore([...shoupaiArray])

	const me: Player = useStore(createPlayer(wujiangList[1]))

	const clickCount = useSignal(0)

	useVisibleTask$(({ track }) => {
		// const flag = track(() => clickCount.value)
		const flag = track(clickCount)
		console.log({ flag })

		if (flag === 0) { return }
		changePlayerGeneral(me, wujiangList[0])

		console.log({ wujiang: wujiangArray[0] })

		// me.general = wujiangArray[0]
		// me.skillList = wujiangArray[0].skills
	})

	return (
		<main>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				{
					wujiangList.map((element, index) => {
						return <General wujiang={element} key={index} />
					})
				}
			</div>

			<Decks deckSize={180} />

			<button onClick$={() => ++clickCount.value}>响应式测试</button>

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
