import * as React from 'react';
import RGL, {WidthProvider, Layout} from 'react-grid-layout';
import { Row, Card, Button } from 'antd';

const GridLayout = WidthProvider(RGL);

type Props = {}

type State = {
    layout: Layout[],
    widgets: Widget[]
}

type Widget = {
    key: number,
    content: string,
}

class Grid extends React.Component<Props, State>{
  constructor (props: Props) {
      super(props);

      this.state = {
          layout: [],
          widgets: [{
              key: 1,
              content: 'A'
          }, {
              key: 2,
              content: 'B',
          },{
              key: 3,
              content: 'C',
          },{
              key: 4,
              content: 'D',
          }]
      };
  }

    render () {
      const { layout, widgets } = this.state;

      return (
          <>
              <Row>
                 <Button icon="plus" shape="circle" type="ghost" onClick={this.addWidget} />
              </Row>
              <Row>
                  <GridLayout
                      layout={layout}
                      onLayoutChange={this.onLayoutChange}
                      cols={6}
                      rowHeight={ 100 }
                      compactType='horizontal'
                      isResizable
                  >
                      {widgets.map( ({ key, content }) => (
                          <div key={key}>
                              <Card style={{ width: '100%', height: '100%'}}>
                                  <Button icon="minus"
                                          shape="circle"
                                          type="ghost"
                                          onClick={() => this.removeWidget(key)}
                                  />
                               </Card>
                          </div>
                      ))}
                  </GridLayout>
              </Row>
          </>
      );
  }

  private onLayoutChange = (layout: Layout[]) => {
      console.log(layout);

      this.setState({
          layout
      });
  };

  private addWidget = (): void => {
      const { widgets, layout } = this.state;
      const nextKey = widgets[widgets.length - 1].key + 1;

      this.setState({
          widgets: widgets.concat({ key: nextKey, content: nextKey.toString(10)}),
          layout: layout.concat({ i: nextKey.toString(10), w: 3, h: 3, x: 10, y: 10}),
      })
  };

  private removeWidget = (key: number) => {
    const { widgets } = this.state;

    this.setState({
        widgets: widgets.filter(widget => widget.key !== key),
    });
  }
}

export default Grid;