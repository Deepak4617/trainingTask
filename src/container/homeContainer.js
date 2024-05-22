 import { connect } from "react-redux";
 import Products from "../components/allProduct";
 import { startFetch,successFetch,errorFetch } from "../state/actionCreater";

 const mapStateToProps = state=>({
 })
 const mapDispatchToProps = dispatch => {
    return {
        startFetch:data=>dispatch(startFetch(data))
    }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(Products)
