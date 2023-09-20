import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const Main = () => {
  return (
    <main className='p-4'>
   <Row>
        <Col>
        <FontAwesomeIcon className='icono-mensaje' icon={faComment} style={{color: "#163a83",}} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col><FontAwesomeIcon className='icono-config' icon={faUserGear} style={{color: "#163a83",}} /></Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col><FontAwesomeIcon className='icono-cubos' icon={faCubes} style={{color: "#163a83",}} /></Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col> <FontAwesomeIcon className='icono-estadis'icon={faChartSimple} style={{color: "#163a83",}} /> </Col>
      </Row>
    </main>
  );
};