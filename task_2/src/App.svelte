<script lang="js">
  let cache = {};
  
  const requestFunc = async function () {
    let response = await fetch('https://open.er-api.com/v6/latest/USD');
    cache = await response.json();
    console.log(cache)
    console.log(converter(1, 'RUB', 'EUR'))
  };
  const converter = function (x, firstCurrency, secondCurrency) {
    if (cache.hasOwnProperty('rates')) {
      let ans = (x/(cache.rates[firstCurrency])) * cache.rates[secondCurrency];
      return ans
    };
  };

  let a;
  let b;
  let selected_1;
  let selected_2;


  requestFunc();
  
</script>

<main>
  <h1>Конвертер валют</h1>
  <section class="currency_area">
    <div class="currency_column">
      <select bind:value={selected_1} on:change={() => b = converter(a, selected_1, selected_2)} name="currency" id="currency-select_1">
        <option value="">-- Выберите валюту --</option>
        <option value="RUB">RUB</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CNY">CNY</option>
      </select>
      <input type="number" bind:value={a} on:input={() => b = converter(a, selected_1, selected_2)}/>
    </div>
    <div class="currency_column">
      <select bind:value={selected_2} on:change={() => a = converter(b, selected_2, selected_1)} name="currency" id="currency-select_2">
        <option value="">-- Выберите валюту --</option>
        <option value="RUB">RUB</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CNY">CNY</option>
      </select>
      <input type="number" bind:value={b} on:input={() => a = converter(b, selected_2, selected_1)}/>
    </div>
  </section>

</main>

<style>

</style>
