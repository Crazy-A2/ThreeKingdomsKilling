# 仿三国杀卡牌游戏（早期开发中。。。）
## 怎么运行？
如果你想瞅瞅现在这是个啥，可以往下看

<!-- 前置条件： -->
1. 下载并安装 [bun](https://bun.sh/)（这是个跟 `node` 和 `deno` 抢地盘的 js 运行环境）

2. 在项目根目录打开命令行窗口，执行 `bun install` 安装依赖

3. 执行 `bun run start`，会自动打开浏览器并运行

> 经测试 node 22.14 版本 + pnpm 10.6.2 版本可以运行，但是不保证一定不出各种兼容性问题

<!-- ## 项目结构
```
├── public
│   └── image                           // 图片资源
│       ├── animation                   // 动画
|       ├── card                        // 卡牌
|       |   └── delayedTrick            // 延时锦囊
|       └-─ general                     // 武将
├── src
│   ├── data                            // 数据
│   │   ├── shoupai-junzheng            // 手牌数组
│   │   └── wujiang-junzheng-biaozhun   // 武将数组-标准包
``` -->
<!-- │   ├── components
│   │   ├── Card
│   │   ├── CardBack
│   │   ├── CardDeck
``` -->

## 功能实现（~~划掉部分已实现~~）

1. 游戏前准备，获取初始牌堆

~~（实现牌堆，初始值为完整的军八手牌数组并打乱）~~

2. 游戏前准备，所有玩家分座次顺序
- [ ] （本局游戏所有玩家随机排座次，座次第一位为主公）
- [ ] （主公玩家先抽取武将牌）
- [ ] （实现武将抽取弹窗）

3. 剩下的玩家抽取武将

- [ ] （实现玩家数组，长度等于游戏人数，元素是参与游戏的玩家对象，方便计算玩家间距离）

~~（实现玩家对象，属性有武将牌数据，有座次数据）~~

4. 游戏前准备，剩余玩家抽取身份

- [ ] （身份也用数组存储，每名玩家随机抽取一个）

5. 游戏前准备，每名玩家从随机挑选的X张武将牌中抽取武将（X暂定为3）

- [ ] （玩家选择武将后，武将牌数据存入玩家对象中）

6. 游戏开始时，按座次顺序，每名玩家摸四张牌（个别武将技能可修改此限制），摸到的牌放入手牌中

~~（实现玩家手牌数组，存放到玩家对象里，初始值为空数组，每次有玩家摸牌，就修改牌堆和对应玩家的手牌数组）~~

7. 游戏正式开始，按座次顺序，依次执行玩家回合

~~（实现玩家回合，每个玩家回合有6个阶段，玩家回合结束后，执行下一个玩家的回合）~~

7.1 回合准备阶段

- [ ] （有些武将技能会在此阶段发动）

7.2 回合判定阶段

- [ ] （实现判定区，初始值为空数组，存放到玩家对象中，每次有玩家置入一张延时锦囊牌，就修改判定区）

- [ ] （按判定区内延时锦囊被置入的倒序？正序？依次判定，判定牌置入弃牌堆【部分武将技能可修改判定牌或获得判定牌】）

7.3 回合摸牌阶段

~~（实现摸牌，每次摸牌，就减少牌堆中的手牌，【部分武将技能可发动】）~~	

7.4 回合出牌阶段

- [ ] （该阶段为所有玩家的主要行动阶段，此阶段默认可出一张【杀】，大部分主动技能也需在此阶段发动）

7.5 回合弃牌阶段

- [ ] （实现弃牌阶段，玩家弃牌时，判断玩家手牌数组的长度是否大于当前体力值【部分武将技能可修改判断条件】，需弃置多出来的手牌）

7.6 回合结束阶段

- [ ] （有些武将技能会在此阶段发动）

8. 每次玩家出牌/响应出牌

- [ ] （实现出牌，每次需要出牌时，判断手牌列表的每张牌是否可以打出，点击确定按钮后，减去手牌数组中对应的手牌并将其置入弃牌堆）

9. 出掉的牌进入弃牌堆

~~（实现弃牌堆【使用牌堆组件？】，初始值为空数组，每次有玩家出掉的牌或被弃置的牌，就修改弃牌堆）~~

10. 出牌记录

- [ ] （实现出牌记录，初始值为空数组，每次有事件发生【包括玩家出牌、回合阶段切换、判定、有牌进入弃牌堆等】，就添加一条字符串记录）
