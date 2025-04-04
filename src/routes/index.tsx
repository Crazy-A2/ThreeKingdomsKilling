import { component$, useStore } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Hand } from '../components/hand/hand.js'
import { General } from '../components/general/general.js'
import { wujiangArray, type Gender, type Country } from '../data/wujiang-junzheng-biaozhun'
import { shoupaiArray, type CardType } from '../data/shoupai-junzheng'

// 需要手牌来生成牌堆
// 游戏开始时，按座次顺序，每名玩家从牌堆中摸四张牌
export default component$(() => {
	const wujiangList: {
		name: string;
		gender: Gender;
		country: Country;
		maxHealth: number;
		currentHealth: number;
		skills: ({
			name: string;
			description: string;
			display?: undefined;
		} | {
			display: boolean;
			name: string;
			description: string;
		})[];
	}[] = useStore([wujiangArray[0], wujiangArray[2]])

	const shoupaiList: {
		name: string;
		suits: string;
		point: string;
		type: CardType;
	}[] = useStore([...shoupaiArray])

	return (
		<>
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


				<div style={{ display: 'flex' }}>
					{
						shoupaiList.map((hand, index) => {
							return <Hand hand={hand} key={index} />
						})
					}
				</div>
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
