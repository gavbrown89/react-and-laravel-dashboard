import React from 'react';
import {withRouter} from 'react-router-dom';
import { ResponsiveSunburst } from '@nivo/sunburst';

const data = {
    "name": "nivo",
    "color": "hsl(359, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(2, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(202, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(240, 70%, 50%)",
                "loc": 38086
              },
              {
                "name": "xAxis",
                "color": "hsl(226, 70%, 50%)",
                "loc": 65050
              },
              {
                "name": "yAxis",
                "color": "hsl(302, 70%, 50%)",
                "loc": 24348
              },
              {
                "name": "layers",
                "color": "hsl(282, 70%, 50%)",
                "loc": 151780
              }
            ]
          },
          {
            "name": "pie",
            "color": "hsl(324, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(50, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(336, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(340, 70%, 50%)",
                        "loc": 102091
                      },
                      {
                        "name": "slices",
                        "color": "hsl(204, 70%, 50%)",
                        "loc": 115559
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(2, 70%, 50%)",
                        "loc": 79443
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(340, 70%, 50%)",
                    "loc": 2810
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(185, 70%, 50%)",
                    "loc": 159957
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(216, 70%, 50%)",
                "loc": 162732
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(164, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(136, 70%, 50%)",
            "loc": 84790
          },
          {
            "name": "hsl",
            "color": "hsl(104, 70%, 50%)",
            "loc": 96724
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(184, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(17, 70%, 50%)",
            "loc": 173300
          },
          {
            "name": "resetClock",
            "color": "hsl(263, 70%, 50%)",
            "loc": 136735
          },
          {
            "name": "noop",
            "color": "hsl(263, 70%, 50%)",
            "loc": 50168
          },
          {
            "name": "tick",
            "color": "hsl(35, 70%, 50%)",
            "loc": 30004
          },
          {
            "name": "forceGC",
            "color": "hsl(31, 70%, 50%)",
            "loc": 34098
          },
          {
            "name": "stackTrace",
            "color": "hsl(269, 70%, 50%)",
            "loc": 35950
          },
          {
            "name": "dbg",
            "color": "hsl(39, 70%, 50%)",
            "loc": 26930
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(46, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(50, 70%, 50%)",
            "loc": 153923
          },
          {
            "name": "city",
            "color": "hsl(95, 70%, 50%)",
            "loc": 110104
          },
          {
            "name": "animal",
            "color": "hsl(82, 70%, 50%)",
            "loc": 51039
          },
          {
            "name": "movie",
            "color": "hsl(97, 70%, 50%)",
            "loc": 82352
          },
          {
            "name": "user",
            "color": "hsl(26, 70%, 50%)",
            "loc": 188448
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(183, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(242, 70%, 50%)",
            "loc": 84157
          },
          {
            "name": "intersect",
            "color": "hsl(256, 70%, 50%)",
            "loc": 120245
          },
          {
            "name": "merge",
            "color": "hsl(153, 70%, 50%)",
            "loc": 8479
          },
          {
            "name": "reverse",
            "color": "hsl(325, 70%, 50%)",
            "loc": 190245
          },
          {
            "name": "toArray",
            "color": "hsl(275, 70%, 50%)",
            "loc": 155706
          },
          {
            "name": "toObject",
            "color": "hsl(151, 70%, 50%)",
            "loc": 132881
          },
          {
            "name": "fromCSV",
            "color": "hsl(144, 70%, 50%)",
            "loc": 70846
          },
          {
            "name": "slice",
            "color": "hsl(42, 70%, 50%)",
            "loc": 94249
          },
          {
            "name": "append",
            "color": "hsl(188, 70%, 50%)",
            "loc": 91230
          },
          {
            "name": "prepend",
            "color": "hsl(191, 70%, 50%)",
            "loc": 107794
          },
          {
            "name": "shuffle",
            "color": "hsl(67, 70%, 50%)",
            "loc": 19727
          },
          {
            "name": "pick",
            "color": "hsl(197, 70%, 50%)",
            "loc": 26225
          },
          {
            "name": "plouc",
            "color": "hsl(132, 70%, 50%)",
            "loc": 2649
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(133, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(45, 70%, 50%)",
            "loc": 142839
          },
          {
            "name": "slugify",
            "color": "hsl(179, 70%, 50%)",
            "loc": 64067
          },
          {
            "name": "snakeCase",
            "color": "hsl(232, 70%, 50%)",
            "loc": 106678
          },
          {
            "name": "camelCase",
            "color": "hsl(312, 70%, 50%)",
            "loc": 18568
          },
          {
            "name": "repeat",
            "color": "hsl(307, 70%, 50%)",
            "loc": 15415
          },
          {
            "name": "padLeft",
            "color": "hsl(116, 70%, 50%)",
            "loc": 138068
          },
          {
            "name": "padRight",
            "color": "hsl(50, 70%, 50%)",
            "loc": 91096
          },
          {
            "name": "sanitize",
            "color": "hsl(131, 70%, 50%)",
            "loc": 58730
          },
          {
            "name": "ploucify",
            "color": "hsl(312, 70%, 50%)",
            "loc": 2969
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(231, 70%, 50%)",
        "children": [
          {
            "name": "whatever",
            "color": "hsl(108, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(228, 70%, 50%)",
                "loc": 170402
              },
              {
                "name": "WTF",
                "color": "hsl(322, 70%, 50%)",
                "loc": 60056
              },
              {
                "name": "lol",
                "color": "hsl(82, 70%, 50%)",
                "loc": 185069
              },
              {
                "name": "IMHO",
                "color": "hsl(71, 70%, 50%)",
                "loc": 36071
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(135, 70%, 50%)",
            "loc": 67372
          },
          {
            "name": "crap",
            "color": "hsl(159, 70%, 50%)",
            "children": [
              {
                "name": "crapA",
                "color": "hsl(114, 70%, 50%)",
                "loc": 143713
              },
              {
                "name": "crapB",
                "color": "hsl(343, 70%, 50%)",
                "children": [
                  {
                    "name": "crapB1",
                    "color": "hsl(230, 70%, 50%)",
                    "loc": 44928
                  },
                  {
                    "name": "crapB2",
                    "color": "hsl(159, 70%, 50%)",
                    "loc": 70259
                  },
                  {
                    "name": "crapB3",
                    "color": "hsl(185, 70%, 50%)",
                    "loc": 15510
                  },
                  {
                    "name": "crapB4",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 68589
                  }
                ]
              },
              {
                "name": "crapC",
                "color": "hsl(358, 70%, 50%)",
                "children": [
                  {
                    "name": "crapC1",
                    "color": "hsl(235, 70%, 50%)",
                    "loc": 30983
                  },
                  {
                    "name": "crapC2",
                    "color": "hsl(237, 70%, 50%)",
                    "loc": 142239
                  },
                  {
                    "name": "crapC3",
                    "color": "hsl(259, 70%, 50%)",
                    "loc": 82159
                  },
                  {
                    "name": "crapC4",
                    "color": "hsl(51, 70%, 50%)",
                    "loc": 82292
                  },
                  {
                    "name": "crapC5",
                    "color": "hsl(227, 70%, 50%)",
                    "loc": 73167
                  },
                  {
                    "name": "crapC6",
                    "color": "hsl(210, 70%, 50%)",
                    "loc": 16030
                  },
                  {
                    "name": "crapC7",
                    "color": "hsl(170, 70%, 50%)",
                    "loc": 124666
                  },
                  {
                    "name": "crapC8",
                    "color": "hsl(42, 70%, 50%)",
                    "loc": 44671
                  },
                  {
                    "name": "crapC9",
                    "color": "hsl(188, 70%, 50%)",
                    "loc": 31235
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

export default class SunBurst extends React.Component {
    render() {
        return (
            <ResponsiveSunburst
                data={data}
                margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                identity="name"
                value="loc"
                cornerRadius={2}
                borderWidth={1}
                borderColor="white"
                colors={{ scheme: 'nivo' }}
                childColor={{ from: 'color' }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
            />
        )
    }
}