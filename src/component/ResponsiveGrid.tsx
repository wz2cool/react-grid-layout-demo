import React, { Component } from "react";
import { Responsive, WidthProvider, Layouts, Layout } from "react-grid-layout";
import { ObjectUtils } from "ts-commons";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface ResponsiveGridState {
  layouts: Layouts;
  itemLayouts: Layout[];
}

export class ResponsiveGrid extends Component<any, ResponsiveGridState> {
  constructor(props: any) {
    super(props);

    this.state = {
      layouts: this.getFromLS("layouts") || {},
      itemLayouts: this.getDefaultItemLayouts()
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveGridLayout
          className="layout"
          layouts={this.state.layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          onLayoutChange={(layout, layouts) => {
            this.onLayoutChange(layout, layouts);
          }}
        >
          {/* <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
            <span className="text">1</span>
          </div>
          <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
            <span className="text">2</span>
          </div>
          <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
            <span className="text">3</span>
          </div>
          <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
            <span className="text">4</span>
          </div>
          <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
            <span className="text">5</span>
          </div> */}
          {this.state.itemLayouts.map((value, i) => {
            return (
              <div
                key={value.i}
                data-grid={value}
              >
                <span className="text">{value.i}</span>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    );
  }

  private resetLayout = () => {
    this.setState({ layouts: {} });
  };

  private onLayoutChange(layout: Layout[], layouts: Layouts) {
    this.saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  private addNew = () => {};

  private getDefaultItemLayouts(): Layout[] {
    return [
      { i: "1", w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 },
      { i: "2", w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 },
      { i: "3", w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 },
      { i: "4", w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 },
      { i: "5", w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }
    ];
  }

  private getFromLS = (key: string): any => {
    let ls: any = {};
    if (localStorage) {
      try {
        const localData = localStorage.getItem("rgl-8");
        if (!ObjectUtils.isNullOrUndefined(localData)) {
          ls = JSON.parse(localData!) || {};
        }
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  };

  private saveToLS = (key: string, value: Layouts): void => {
    if (localStorage) {
      localStorage.setItem("rgl-8", JSON.stringify({ [key]: value }));
    }
  };
}
