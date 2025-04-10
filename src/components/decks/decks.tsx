import { component$ } from '@builder.io/qwik';

export interface DecksProps {
  deckSize: number // 牌堆大小
}

/**
 * 牌堆组件 渲染游戏对局内的牌堆
 */
export const Decks = component$<DecksProps>((props) => {
  return (
    <div>
      Decks component works!
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // width: 93,
          // height: 130,
          // width: 50,
          // height: 72,
          width: 40,
          height: 55,
          textAlign: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${import.meta.env.BASE_URL}image/card/卡背.png)`,
        }}
      >
        {props.deckSize}
      </div>
    </div >
  );
});
