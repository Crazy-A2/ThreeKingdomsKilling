import { component$, useStore, noSerialize } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
// import { Hand } from '../components/hand/hand'
import { General } from '../components/general/general'
import { wujiangArray } from '../data/wujiang-junzheng-biaozhun'
import type { General as WuJiang } from '../data/wujiang-junzheng-biaozhun'
// import { shoupaiArray } from '../data/shoupai-junzheng'
// import type { Hand as ShouPai } from '../data/shoupai-junzheng'
import { Player } from '../utils/player'
import { MyArea } from '../components/my-area/my-area'

export default component$(() => {
	const wujiangList: WuJiang[] = useStore([wujiangArray[0], wujiangArray[2]])

	// const shoupaiList: ShouPai[] = useStore([...shoupaiArray])

	const player = new Player(wujiangList[0])
	const player2 = new Player(wujiangList[1])

	const player3 = noSerialize(new Player(wujiangList[1]))
	// const player3 = noSerialize(useStore(new Player(wujiangList[1])))

	return (
		<>
			<p>{player.general.skills[0].name}</p>
			<p>{player.general.skills[0].description}</p>

			<p>{player.general.skills[1].name}</p>
			<p>{player.general.skills[1].description}</p>

			<p>{player2.general.skills[0].name}</p>
			<p>{player2.general.skills[0].description}</p>

			<p>{player2.general.skills[1].name}</p>
			<p>{player2.general.skills[1].description}</p>

			<h1>Hi 👋</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</div>

			{/* <header>：页眉。 */}
			{/* <nav>：导航栏。 */}
			{/* <main>：主内容。主内容中还可以有各种子内容区段，可用<article>、<section> 和 <div> 等元素表示。 */}
			{/* <aside>：侧边栏，经常嵌套在 <main> 中。 */}
			{/* <footer>：页脚。 */}
			<section class='section bright'>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					{
						wujiangList.map((element, index) => {
							return <General wujiang={element} key={index} />
						})
					}
				</div>

				{/* <div style={{ display: 'flex' }}>
					{
						shoupaiList.map((hand, index) => {
							return <Hand hand={hand} key={index} />
						})
					}
				</div> */}

				{/* 玩家区域 */}
				<MyArea player={player3} />
				{/* 测试 */}
				{/* <MyArea /> */}
			</section>
		</>
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
