// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap'

// ** Images
import trialSvg from '@src/assets/images/illustration/pricing-Illustration.svg'

const PaymentTrial = () => {
  return (
    <div className='pricing-free-trial'>
      <Row>
        <Col className='mx-auto' lg={{ size: 10, offset: 3 }} sm='12'>
          <div className='pricing-trial-content d-flex justify-content-between'>
            <div className='text-center text-md-start mt-3'>
              <h3 className='text-primary'>Buy FARI and Save!</h3>
              <h5>Get up to 90% savings compared to traditional ads. </h5>
              <div className='mt-2 mt-lg-3'>
                <Button color='primary'>Buy FARI</Button>
              </div>
            </div>
            <img
              className='pricing-trial-img img-fluid'
              src={trialSvg}
              alt='trial svg'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PaymentTrial
