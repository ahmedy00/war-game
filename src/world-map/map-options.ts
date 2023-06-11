import { useAppStore } from '@/store/app'

const appStore = useAppStore()
appStore.initializeTheme()

const options = {
  textStyle: {},
  title: {
    text: 'World War Map',
    left: 'center',
    padding: 20,
    textStyle: {
      color: appStore?.theme?.oppositeColor
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    left: 'right',
    top: 'top',
    min: 2951740,
    max: 83896400,
    textStyle: {
      color: appStore?.theme?.oppositeColor
    },
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
    padding: 20
  },
  toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
  series: [
      {
        name: 'Population',
        type: 'map',
        map: 'world',
        roam: true,
        selectedMode: 'single',
        select: {
          itemStyle: {
            color: null,
            borderColor: 'none',
            borderWidth: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 2,
            shadowColor: 'rgba(0,0,0,0.9)'
         }
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: 'none',
          },
        emphasis: {
          disabled: false,
          label: {
            show: true
          },
          itemStyle: {
            areaColor: 'none',
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
          { name: 'North Cyprus', value: '382836'},
          { name: 'South Cyprus', value: '1207359'},
        ]
      }
    ]
}

export default options
