import { Card, Col, Row } from 'antd';
const App = ({

    content = "Card",
    bordered = false

}) => (

    <Card bordered={bordered} >
        {content}
    </Card>

);
export default App;