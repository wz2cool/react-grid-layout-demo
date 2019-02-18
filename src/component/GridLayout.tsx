import ReactGridLayout, { Layouts, Layout } from "react-grid-layout";
import React, { Component } from "react";

interface MyFirstGridState {
  layout: Layout[];
}

export class MyFirstGrid extends Component<any, MyFirstGridState> {
  constructor(props: any) {
    super(props);
    this.state = {
      layout: [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ]
    };
  }

  private addNew = () => {
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 5, y: 0, w: 2, h: 2 }
    ];

    this.setState({ layout: layout });
  };

  render() {
    // layout is an array of objects, see the demo for more complete usage

    return (
      <div>
        <button onClick={this.addNew}>add new</button>
        <ReactGridLayout
          className="layout"
          layout={this.state.layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          {this.state.layout.map(value => {
            return <div key={value.i}>{value.i}</div>;
          })}
        </ReactGridLayout>
      </div>
    );
  }
}
