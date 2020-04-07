import React from 'react';
import {withRouter} from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(175, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 268
      },
      {
        "x": "helicopter",
        "y": 203
      },
      {
        "x": "boat",
        "y": 187
      },
      {
        "x": "train",
        "y": 90
      },
      {
        "x": "subway",
        "y": 255
      },
      {
        "x": "bus",
        "y": 109
      },
      {
        "x": "car",
        "y": 11
      },
      {
        "x": "moto",
        "y": 43
      },
      {
        "x": "bicycle",
        "y": 293
      },
      {
        "x": "horse",
        "y": 241
      },
      {
        "x": "skateboard",
        "y": 23
      },
      {
        "x": "others",
        "y": 56
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(146, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 98
      },
      {
        "x": "helicopter",
        "y": 189
      },
      {
        "x": "boat",
        "y": 192
      },
      {
        "x": "train",
        "y": 233
      },
      {
        "x": "subway",
        "y": 172
      },
      {
        "x": "bus",
        "y": 11
      },
      {
        "x": "car",
        "y": 56
      },
      {
        "x": "moto",
        "y": 32
      },
      {
        "x": "bicycle",
        "y": 67
      },
      {
        "x": "horse",
        "y": 97
      },
      {
        "x": "skateboard",
        "y": 113
      },
      {
        "x": "others",
        "y": 5
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(95, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 290
      },
      {
        "x": "helicopter",
        "y": 218
      },
      {
        "x": "boat",
        "y": 150
      },
      {
        "x": "train",
        "y": 266
      },
      {
        "x": "subway",
        "y": 91
      },
      {
        "x": "bus",
        "y": 284
      },
      {
        "x": "car",
        "y": 75
      },
      {
        "x": "moto",
        "y": 77
      },
      {
        "x": "bicycle",
        "y": 34
      },
      {
        "x": "horse",
        "y": 48
      },
      {
        "x": "skateboard",
        "y": 232
      },
      {
        "x": "others",
        "y": 154
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(269, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 79
      },
      {
        "x": "helicopter",
        "y": 68
      },
      {
        "x": "boat",
        "y": 265
      },
      {
        "x": "train",
        "y": 36
      },
      {
        "x": "subway",
        "y": 153
      },
      {
        "x": "bus",
        "y": 234
      },
      {
        "x": "car",
        "y": 287
      },
      {
        "x": "moto",
        "y": 287
      },
      {
        "x": "bicycle",
        "y": 91
      },
      {
        "x": "horse",
        "y": 68
      },
      {
        "x": "skateboard",
        "y": 198
      },
      {
        "x": "others",
        "y": 238
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(284, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 14
      },
      {
        "x": "helicopter",
        "y": 204
      },
      {
        "x": "boat",
        "y": 145
      },
      {
        "x": "train",
        "y": 270
      },
      {
        "x": "subway",
        "y": 18
      },
      {
        "x": "bus",
        "y": 298
      },
      {
        "x": "car",
        "y": 91
      },
      {
        "x": "moto",
        "y": 87
      },
      {
        "x": "bicycle",
        "y": 146
      },
      {
        "x": "horse",
        "y": 71
      },
      {
        "x": "skateboard",
        "y": 201
      },
      {
        "x": "others",
        "y": 116
      }
    ]
  }
]

export default class LineChart extends React.Component {
  render() {
    return (
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
  }
}