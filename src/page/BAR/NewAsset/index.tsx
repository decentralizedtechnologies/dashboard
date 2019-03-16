import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFieldRow, addFileToAssetOutput, toggleOutputView, togglePublishView } from "store/BAR/actions";
import { assetOutputProp, fieldRowsProp, isOutputOnDisplayProp, isPublishOnDisplayProp, schemaOutputProp } from "store/BAR/selectors";
import NewAsset from "./NewAsset";

const mapStateToProps = (state: any) => {
  return ({
    isOutputOnDisplay: isOutputOnDisplayProp(state),
    isPublishOnDisplay: isPublishOnDisplayProp(state),
    fieldRows: fieldRowsProp(state),
    assetOutput: assetOutputProp(state),
    schemaOutput: schemaOutputProp(state),
  });
};

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    addFieldRow,
    toggleOutputView,
    togglePublishView,
    addFileToAssetOutput,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewAsset);
