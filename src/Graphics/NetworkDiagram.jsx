import React from "react";
// import ReactDOM from "react-dom";
import Chart from "react-google-charts";

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}
const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" }
];

const rows = [
  [
    "Research",
    "Find sources",
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null
  ],
  [
    "Write",
    "Write paper",
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    "Research,Outline"
  ],
  [
    "Cite",
    "Create bibliography",
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    "Research"
  ],
  [
    "Complete",
    "Hand in paper",
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    "Cite,Write"
  ],
  [
    "Outline",
    "Outline paper",
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    "Research"
  ]
];
class NetworkDiagram extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="NetworkDiagram">
      <Chart
          width={'100%'}
          height={'400px'}
          chartType="Gantt"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'string', label: 'Task ID' },
              { type: 'string', label: 'Task Name' },
              { type: 'string', label: 'Resource' },
              { type: 'date', label: 'Start Date' },
              { type: 'date', label: 'End Date' },
              { type: 'number', label: 'Duration' },
              { type: 'number', label: 'Percent Complete' },
              { type: 'string', label: 'Dependencies' },
            ],
            [
              'Research',
              'Find sources',
              null,
              new Date(2015, 0, 1),
              new Date(2015, 0, 5),
              null,
              100,
              null,
            ],
            [
              'Write',
              'Write paper',
              'write',
              null,
              new Date(2015, 0, 9),
              3 * 24 * 60 * 60 * 1000,
              25,
              'Research,Outline',
            ],
            [
              'Cite',
              'Create bibliography',
              'write',
              null,
              new Date(2015, 0, 7),
              1 * 24 * 60 * 60 * 1000,
              20,
              'Research',
            ],
            [
              'Complete',
              'Hand in paper',
              'complete',
              null,
              new Date(2015, 0, 10),
              1 * 24 * 60 * 60 * 1000,
              0,
              'Cite,Write',
            ],
            [
              'Outline',
              'Outline paper',
              'write',
              null,
              new Date(2015, 0, 6),
              1 * 24 * 60 * 60 * 1000,
              100,
              'Research',
            ],
          ]}
          options={{
            gantt: {
              criticalPathEnabled: false,
              innerGridHorizLine: {
                stroke: '#ffe0b2',
                strokeWidth: 2,
              },
              innerGridTrack: { fill: '#fff3e0' },
              innerGridDarkTrack: { fill: '#ffcc80' },
            },
          }}
          rootProps={{ 'data-testid': '7' }}
        />
        <div>
          I'm a picture of the chart
          {/* <img src={this.state.chartImageURI} /> */}
        </div>
      </div>
    );
  }
}

export default NetworkDiagram;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
