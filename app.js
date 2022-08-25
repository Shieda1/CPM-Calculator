// https://calculator.swiftutors.com/cpm-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerThousandRadio = document.getElementById('costPerThousandRadio');
const totalCostRadio = document.getElementById('totalCostRadio');
const adImpressionsRadio = document.getElementById('adImpressionsRadio');

let costPerThousand;
let totalCost = v1;
let adImpressions = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerThousandRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Cost ($)';
  variable2.textContent = 'Ad Impressions';
  totalCost = v1;
  adImpressions = v2;
  result.textContent = '';
});

totalCostRadio.addEventListener('click', function() {
  variable1.textContent = '(CPM) Cost Per Thousand ($)';
  variable2.textContent = 'Ad Impressions';
  costPerThousand = v1;
  adImpressions = v2;
  result.textContent = '';
});

adImpressionsRadio.addEventListener('click', function() {
  variable1.textContent = '(CPM) Cost Per Thousand ($)';
  variable2.textContent = 'Total Cost ($)';
  costPerThousand = v1;
  totalCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerThousandRadio.checked)
    result.textContent = `Cost Per Thousand = ${computeCostPerThousand().toFixed(2)} $`;

  else if(totalCostRadio.checked)
    result.textContent = `Total Cost = ${computeTotalCost().toFixed(2)} $`;

  else if(adImpressionsRadio.checked)
    result.textContent = `Ad Impressions = ${computeAdImpressions().toFixed(2)}`;
})

// calculation

function computeCostPerThousand() {
  return (Number(totalCost.value) / Number(adImpressions.value)) * 1000;
}

function computeTotalCost() {
  return (Number(costPerThousand.value) * Number(adImpressions.value)) / 1000;
}

function computeAdImpressions() {
  return (Number(totalCost.value) / Number(costPerThousand.value)) * 1000;
}