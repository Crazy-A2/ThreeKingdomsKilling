# 仿三国杀卡牌游戏（早期开发中。。。）
## 运行
如果你想瞅瞅现在这是个啥，可以往下看

<!-- 前置条件： -->
1. 下载并安装 [bun](https://bun.sh/)

2. 在项目根目录打开命令行，执行 `bun install` 安装依赖

3. 运行 `bun run start`，会自动打开浏览器并运行


## 项目结构
```
├── public
│   └── image                           // 图片资源
│       ├── animation                   // 动画
|       ├── card                        // 卡牌
|       |   └── delayedTrick            // 延时锦囊
|       └-─ persona                     // 角色
├── src
│   ├── data                            // 数据
│   │   ├── shoupai-junzheng            // 手牌数组
│   │   └── wujiang-junzheng-biaozhun   // 武将数组-标准包
```
<!-- │   ├── components
│   │   ├── Card
│   │   ├── CardBack
│   │   ├── CardDeck
``` -->