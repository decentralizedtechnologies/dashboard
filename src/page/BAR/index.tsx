import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BAR from "./BAR";

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BAR);
