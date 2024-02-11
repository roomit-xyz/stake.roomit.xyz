const data = [
    {
      "name": "source",
      "valoper": "sourcevaloper1s2rjwh8jahg7vjac9hnj99rlkgrpeknwd8expt",
      "divide": 1000000,
      "gecko": "source"
    },
    {
      "name": "planq",
      "valoper": "plqvaloper1fqnr328nlndkxek2jaz8teec0euyr5yh26q26l",
      "divide": 1000000000000000000,
      "gecko": "planq"
    },
    {
      "name": "band",
      "valoper": "bandvaloper13tf84rkc9yflru6kty4xj8jtkuzl6fd66f3q3z",
      "divide": 1000000,
      "gecko": "band-protocol"
    },
    {
      "name": "dvpn",
      "valoper": "sentvaloper1pyn04fth38t9tvpa3fvfnn4xng06zsymthu6ua",
      "divide": 1000000,
      "gecko": "sentinel"
    },
    {
      "name": "sge",
      "valoper": "sgevaloper1rhmrwq4xket2ua4s7nqunnne8kzfz4w34082zv",
      "divide": 1000000,
      "gecko": "six-sigma"
    },
    {
      "name": "gitopia",
      "valoper": "gitopiavaloper1pv8fkl4t7wk9mwptkwf8pemy9rt8qpkydr6k3p",
      "divide": 1000000,
      "gecko": "gitopia"
    },
    {
      "name": "nym",
      "valoper": "AGaEw8kZuNAGZyQXYrtedaZcAYUE7aUzngeYGrBgHETo",
      "divide": 1000000,
      "gecko": "nym"
    }
  ];
  
  let total = 0;
  
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  const fetchPrice = async (gecko) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${gecko}&vs_currencies=usd`);
      const data = await response.json();
      return data[gecko].usd;
    } catch (error) {
      console.error('Error fetching price:', error);
      return null;
    }
  };
  
  const main = async () => {
    // Display loading message
    const resultsElement = document.getElementById('results');
    resultsElement.innerText = 'Loading...';
  
    for (const entry of data) {
      const { name, valoper, divide, gecko } = entry;
      const baseUrl = name === 'nym' ? 'https://api.nymtech.net/cosmos/staking/v1beta1/validators/' : `https://api.${name}.roomit.xyz/cosmos/staking/v1beta1/validators/`;
      const url = baseUrl + valoper;
  
      try {
        let tokenData;
        if (name === 'nym') {
          // Assign a default value of 250000 if fetching token data for "nym" fails
          tokenData = await fetchData(url);
          if (!tokenData) {
            console.log('Error fetching token data for "nym". Assigning default value...');
            originalTotalToken = 255451000000 / divide;
          } else {
            originalTotalToken = tokenData.validator.tokens / divide;
          }
        } else {
          tokenData = await fetchData(url);
          originalTotalToken = tokenData.validator.tokens / divide;
        }
  
        const price = await fetchPrice(gecko);
        const totalPricePerToken = originalTotalToken * price;
        console.log(`${name} | ${totalPricePerToken}`);
        total += totalPricePerToken;
      } catch (error) {
        console.error('Error processing entry:', error);
      }
  
      await new Promise(resolve => setTimeout(resolve, 10000)); 
    }
  
    // Remove loading message and update the HTML element with the formatted total
    resultsElement.innerText = `$${total.toFixed(2)} USD    `;
  };
  
  main();
  

  