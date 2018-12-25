/** @jsx jsx */
import { jsx } from '@emotion/core';
import Widget from '../molecules/Widget';
import Layout from '../atoms/Layout';

const WidgetContainer = props => (
  <Layout
    css={{
      width: '100%',
      flexDirection: 'column',
      margin: '0 12px',
      marginTop: '15px',
      marginBottom: '10px',
    }}
  >
    <Widget count="10 000" title="Lorem Ipsum" />
    <Layout css={{ justifyContent: 'space-between', marginTop: '15px' }}>
      <Widget sm count="6" title="Dolor Sit" />
      <Widget sm count="111" title="Amet Consect" />
    </Layout>
  </Layout>
);

export default WidgetContainer;