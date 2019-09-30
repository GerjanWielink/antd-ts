import * as React from 'react';
import GridLayout, {Layout} from 'react-grid-layout';
import { Card } from 'antd';

type Props = {}

type State = {
    layout: Layout[]
}

class Grid extends React.Component<Props, State>{
  constructor (props: Props) {
      super(props);

      this.state = {
          layout: [],
      };
  }

  render () {
      const { layout } = this.state;

      return <GridLayout layout={layout} cols={2} width={ 1200 }  >
          <Card key="a">A</Card>
          <Card key="b">B</Card>
      </GridLayout>
  }

  private onLayoutChange = (layout: Layout[]) => {
      this.setState({
          layout
      });
  }
}

export default Grid;