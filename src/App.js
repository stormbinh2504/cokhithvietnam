import React, { useEffect } from 'react'

import './App.scss';
import "../src/styles/styles.scss";
import "aos/dist/aos.css";
import { Route, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';
import { ConnectedRouter as Router } from 'connected-react-router';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import PrivateRouter from './containers/customRouter/PrivateRouter';
import Header from './containers/Header/Header';
import Routes from './routes/Routes';
import Home from './containers/Home/Home';
import { TYPE_USER } from './utils';
import Footer from './containers/Footer/Footer';
import ProductCollections from './containers/ProductCollections/ProductCollections';
import { PATH_NAME } from './utils/constants';
import { history } from './redux/store'
import ProductKeDriverIn from './containers/ProductCollections/ProductKeDriverIn/ProductKeDriverIn';
import Contact from './containers/Contact/Contact';
import ToolPhoneZaloChat from './containers/Common/ToolPhoneZaloChat/ToolPhoneZaloChat';
import ProductKeSelective from './containers/ProductCollections/ProductKeSelective/ProductKeSelective';
import ProductDoubleDeep from './containers/ProductCollections/ProductDoubleDeep/ProductDoubleDeep';
import ProductNarrowAisle from './containers/ProductCollections/ProductNarrowAisle/ProductNarrowAisle';
import ProductKePalletDiDong from './containers/ProductCollections/ProductKePalletDiDong/ProductKePalletDiDong';
import ProductKeConLanPalletFlowRack from './containers/ProductCollections/ProductKeConLanPalletFlowRack/ProductKeConLanPalletFlowRack';
import ProductKePushBack from './containers/ProductCollections/ProductKePushBack/ProductKePushBack';
import ProductKeTayDo from './containers/ProductCollections/ProductKeTayDo/ProductKeTayDo';
import ProductKeDeKhuonMouldRack from './containers/ProductCollections/ProductKeDeKhuonMouldRack/ProductKeDeKhuonMouldRack';
import ProductKeTrungTai from './containers/ProductCollections/ProductKeTrungTai/ProductKeTrungTai';
import ProductKeConLanTrungTai from './containers/ProductCollections/ProductKeConLanTrungTai/ProductKeConLanTrungTai';
import ProductKeVLo from './containers/ProductCollections/ProductKeVLo/ProductKeVLo';
import ProductKeVHoa from './containers/ProductCollections/ProductKeVHoa/ProductKeVHoa';
import ProductKeSanMezzanine from './containers/ProductCollections/ProductKeSanMezzanine/ProductKeSanMezzanine';
import ProductKeXepChong from './containers/ProductCollections/ProductKeXepChong/ProductKeXepChong';
import ProductKeDeBanHangTuDong from './containers/ProductCollections/ProductKeDeBanHangTuDong/ProductKeDeBanHangTuDong';
import ProductKeSieuthi from './containers/ProductCollections/ProductKeSieuthi/ProductKeSieuthi';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './containers/About/About';
import Guarantee from './containers/Guarantee/Guarantee';
import Security from './containers/Security/Security';
import Payment from './containers/Payment/Payment';
import Transport from './containers/Transport/Transport';
import Project from './containers/Project/Project';
import ProjectVin05022020 from './containers/Project/ProjectVin05022020/ProjectVin05022020';
import ProjectSieuThiLongBien from './containers/Project/ProjectSieuThiLongBien/ProjectSieuThiLongBien';
import ProjectYenPhongBacNinh from './containers/Project/ProjectYenPhongBacNinh/ProjectYenPhongBacNinh';
import ProjectLacSonHoaBinh from './containers/Project/ProjectLacSonHoaBinh/ProjectLacSonHoaBinh';
import ProjectTienDuBacNinh from './containers/Project/ProjectTienDuBacNinh/ProjectTienDuBacNinh';
import ProjectNinhBinh from './containers/Project/ProjectNinhBinh/ProjectNinhBinh';

if (typeof window !== "undefined") {
  injectStyle();
}
let pathName = window.location.pathname
function App() {
  const state = useSelector((state) => state);
  const { auth, app } = state

  const scrollTopAnimated = () => {
    $('#scrollToTop').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1200);
    })
  }

  useEffect(() => {
    scrollTopAnimated()
  }, []);

  return (

    <div className="App">
      <Router history={history}>
        <ScrollToTop />
        < Header />
        <Switch>
          <div className="main">
            < div id="container-page-content" className="container-page-content ">
              <Route exact path={PATH_NAME.HOME} component={Home} />
              <Route exact path={PATH_NAME.COLLECTIONS} component={ProductCollections} />
              <Route exact path={PATH_NAME.PROJECT} component={Project} />

              <Route exact path={PATH_NAME.CONTACT} component={Contact} />
              <Route exact path={PATH_NAME.ABOUT_OUR} component={About} />
              <Route exact path={PATH_NAME.GUARANTEE} component={Guarantee} />
              <Route exact path={PATH_NAME.SECURITY} component={Security} />
              <Route exact path={PATH_NAME.PAYMENT} component={Payment} />
              <Route exact path={PATH_NAME.TRANSPORT} component={Transport} />


              <Route exact path={PATH_NAME.KE_DRIVER_IN} component={ProductKeDriverIn} />
              <Route exact path={PATH_NAME.KE_SELECTIVE} component={ProductKeSelective} />
              <Route exact path={PATH_NAME.KE_DOUBLE_DEEP} component={ProductDoubleDeep} />
              <Route exact path={PATH_NAME.KE_NARROW_AISLE} component={ProductNarrowAisle} />
              <Route exact path={PATH_NAME.KE_PALLET_DI_DONG} component={ProductKePalletDiDong} />
              <Route exact path={PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK} component={ProductKeConLanPalletFlowRack} />
              <Route exact path={PATH_NAME.KE_PUSH_BACK} component={ProductKePushBack} />
              <Route exact path={PATH_NAME.KE_TAY_DO} component={ProductKeTayDo} />
              <Route exact path={PATH_NAME.KE_DE_KHUON_MOULD_RACK} component={ProductKeDeKhuonMouldRack} />
              <Route exact path={PATH_NAME.KE_TRUNG_TAI} component={ProductKeTrungTai} />
              <Route exact path={PATH_NAME.KE_CON_LAN_TRUNG_TAI} component={ProductKeConLanTrungTai} />
              <Route exact path={PATH_NAME.KE_V_LO} component={ProductKeVLo} />
              <Route exact path={PATH_NAME.KE_V_HOA} component={ProductKeVHoa} />
              <Route exact path={PATH_NAME.KE_SAN_MEZZANINE} component={ProductKeSanMezzanine} />
              <Route exact path={PATH_NAME.KE_XEP_CHONG} component={ProductKeXepChong} />
              <Route exact path={PATH_NAME.KE_DE_HANG_BAN_TU_DONG} component={ProductKeDeBanHangTuDong} />
              <Route exact path={PATH_NAME.KE_SIEU_THI} component={ProductKeSieuthi} />


              <Route exact path={PATH_NAME.PROJECT_YENPHONG_BACNINH} component={ProjectYenPhongBacNinh} />
              <Route exact path={PATH_NAME.PROJECT_SIEU_THI_LONG_BIEN} component={ProjectSieuThiLongBien} />
              <Route exact path={PATH_NAME.PROJECT_LACSON_HOABINH} component={ProjectLacSonHoaBinh} />
              <Route exact path={PATH_NAME.PROJECT_TIENDU_BACNINH} component={ProjectTienDuBacNinh} />
              <Route exact path={PATH_NAME.PROJECT_NINHBINH} component={ProjectNinhBinh} />
              <Route exact path={PATH_NAME.PROJECT_VIN_05_02_2020} component={ProjectVin05022020} />

            </div>
            <ToolPhoneZaloChat />
            <div id="scrollToTop" className='item-center'>
              <i class="fa fa-angle-double-up" aria-hidden="true">
              </i>
            </div>
          </div>
        </Switch>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
