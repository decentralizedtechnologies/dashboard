import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFieldRow, removeFieldRow, updateFieldRow } from "store/BAR/actions";
import FieldRow from "./FieldRow";

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    addFieldRow,
    removeFieldRow,
    updateFieldRow,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FieldRow);
