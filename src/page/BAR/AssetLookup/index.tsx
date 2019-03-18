import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAssetDetails, setAssetReference } from "store/BAR/ethereum";
import { assetReferenceProp, versionsProp } from "store/BAR/selectors";
import AssetLookup from "./AssetLookup";

const mapStateToProps = (state: any) => {
  return ({
    assetReference: assetReferenceProp(state),
    versions: versionsProp(state),
  });
};

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    setAssetReference,
    getAssetDetails,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssetLookup);
