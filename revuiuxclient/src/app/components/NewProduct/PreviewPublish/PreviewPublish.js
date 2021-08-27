import React, { useState } from "react";
import "./PreviewPublish.css";
import PropTypes from 'prop-types';
import img1 from "../../../../Assets/image/Vector.png";
import ModalAlertBox from "../../UiComponents/ModalAlertBox";
import PATHS from "../../../../routes/routes-path";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActions from "../../../actions/product";
import { history } from "../../../../store";

const PreviewPublish = props => {

  const { updateProduct, productId , productPublished } = props;
  const Txt = "Product Published Successfully!";
  const [showModal, setShowModal] = useState(false);
  const showModalBox = () => {
    updateProduct(productId, {isPublished:true})
  };
  const hideModal = () => {
    setShowModal(false);
    history.push('/');
  };

  const showQuestionnairePreview = () => {
    history.push(PATHS.previewQuestionnaire.replace(':productId', productId));
  }

  const showPrototypePreview = () => {
    history.push(PATHS.previewPrototype.replace(':productId', productId));
  }

  const outerMostDivPP = productPublished
    ? "outerMostDivPP display-blur"
    : "outerMostDivPP display-block";

  return (
    <div>
      <div className={outerMostDivPP}>
        <p>
          <b>Preview and publish:</b>
        </p>
        <div className="lowerDivPP">
          <div className="firstColumnPP">
           
              <p className="LabelsPP">
                Survey Questionnaire
              </p>
              <button type="submit" className="previewBtnPP" onClick={showQuestionnairePreview}>
                Preview
              </button>
            
          </div>

          <div className="firstColumnPP">
            
              <p className="LabelsPP">
                Product Prototypes
              </p>
              <button type="submit" className="previewBtnPP" onClick={showPrototypePreview}>
                Preview
              </button>
            
          </div>
          <div className="thirdColumnPP">
            <button
              type="submit"
              className="publishBtnPP"
              onClick={showModalBox}
            >
              Publish
            </button>
          </div>
          <hr />
        </div>
      </div>
      <ModalAlertBox
        show={productPublished}
        handleClose={hideModal}
        imgUrl={img1}
        title="Congratulations!!!"
        text={Txt}
        btnTxt="Home Page"
      ></ModalAlertBox>
    </div>
  );
};

const mapStateToProps = state => ({
  productPublished : state.productReducer.productPublished,
})

const mapDispatchToProps = dispatch => ({
  updateProduct: (productId, product) => dispatch(productActions.updateProduct(productId, product))
})

PreviewPublish.propTypes = {
  product: PropTypes.object
}

PreviewPublish.defaultProps = {
  product: {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewPublish));
