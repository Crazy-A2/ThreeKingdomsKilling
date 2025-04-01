import { component$ } from '@builder.io/qwik'
import shoupaiArray from '../../utils/shoupai-junzheng'

import styles from './card.module.css'

export interface CardProps {}

/**
 * 手牌组件 定义游戏对局内的手牌
 * 1. 卡片名称
   2. 卡片类型
   3. 卡片描述
   4. 卡片效果
   5. 卡片图片
   6. 卡片属性
   7. 卡片技能
 */
export const Card = component$<CardProps>(props => {
	// styles.img.backgroundImage=`url(${img2})`
	// const style = {
	// 	width: '400px',
	// 	height: '600px',
	// 	backgroundImage: `url(${img2})`,
	// }

	// shoupaiArray.forEach(element => {
	// 	console.log(element)
	// })

	return (
		<>
			<div>Card component works!</div>

			<div style={styles.img} />
			<div style={{ display: 'flex' }}>
				{shoupaiArray.map((element, index) => {
					return (
						<div
							key={index}
							style={{
								width: 93,
								height: 130,
								color: ['♦', '♥'].includes(element.suits) ? 'red' : 'black',
								backgroundImage: `url(${import.meta.env.BASE_URL}image/card/${element.name}.png)`,
							}}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									width: 23,
								}}>
								<span style={{ fontSize: 18, fontWeight: 700 }}>
									{element.point}
								</span>
								<span>{element.suits}</span>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
})
// 实现逻辑
// 生成 json 数组，每个元素代表一张卡牌 	√
// 读取 json 数组中的元素生成卡牌组件

// 读取表格数据并生成表示卡牌的 json 数组
// function getJson() {
//     // 获取表格元素
//     const table = document.querySelector("table.wikitable");

//     // 定义结果数组
//     const result = [];

//     // 遍历表格行
//     const rows = table.querySelectorAll("tbody tr");
//     rows.forEach(row => {
//         const cells = row.querySelectorAll("td");
//         if (cells.length >= 5) {
//             // 获取花色和点数
//             const suitsPoint = cells[0].innerText.trim();
//             const suits = suitsPoint[0]; // 花色
//             const point = suitsPoint.slice(1); // 点数

//             // 遍历第2-5列
//             for (let i = 1; i <= 4; i++) {
//                 const cellText = cells[i].innerText.trim();
//                 if (cellText) { // 跳过空单元格
//                     const name = cellText.replace(/【|】/g, ""); // 去掉【】
//                     result.push({ name, suits, point });
//                 }
//             }
//         }
//     });

//     // 输出 JSON 数据
//     console.log(JSON.stringify(result, null, 4));
// }
