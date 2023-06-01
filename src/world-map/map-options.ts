const options = {
  textStyle: {},
  title: {
    text: 'World War Map',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    left: 'right',
    min: 2951740,
    max: 83896400,
    inRange: {
      color: [
        '#edd100',
        '#917205',
        '#a17110',
        '#733b28',
        '#502b08'
      ]
    },
    text: ['High', 'Low'],
    calculable: true,
    padding: 50
  },
  toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
  legend: {
    data: [
      'testData'
    ]
  },
  series: [
      {
        name: 'Population',
        type: 'map',
        map: 'world',
        roam: true,
        selectedMode: 'single',
        markLine: {
          symbol: 'triangle',
          symbolSize: 100
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { name: 'Belarus', value: '9465300'},
          { name: 'Ukraine', value: '44385155' },
          { name: 'Romania', value: '19237691' },
          { name: 'Bulgaria', value: '7000039'},
          { name: 'Greece', value: '10715549' },
          { name: 'Turkey', value: '83154997' },
          { name: 'Armenia', value: '2951740'},
          { name: 'Azerbaijan', value: '10067108'},
          { name: 'Syria', value: '17500658' },
          { name: 'Israel', value: '9704000' },
          { name: 'Palestine', value: '5153135' },
          { name: 'Iraq', value: '40222503' },
          { name: 'Iran', value: '83896400' },
        ]
      }
    ]
}

export default options
