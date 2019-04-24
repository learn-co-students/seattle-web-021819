<App state={
    sushis: [{name,price,imgUrl}],
    sushisPurchased: [],
    moneyRemaining: 100,
  }
  methods: {
    eatSushi(sushi)
  }
>
  <SushiContainer
    onClick={eatSushi}
    sushis={state.sushis}
    state={
      currentIndex: 0
    }
  />
  <Tablee>
    <Budget budget={moneyRemaining} />
    <Plates sushis={sushisPurchased} />
  </Tablee>
</App>
