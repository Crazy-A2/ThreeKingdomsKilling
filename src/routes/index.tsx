import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Card } from '../components/card/card.tsx'

export default component$(() => {
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
				<Card />
			</section>
		</>
	)
})

// 定义页面头部信息
export const head: DocumentHead = {
	title: '三国杀！！！！！！！！！',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
}
