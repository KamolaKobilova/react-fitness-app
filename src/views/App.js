import React, { useEffect } from 'react';
import { Layout, Menu, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { BiLogOut, BiBookAlt, BiGroup, BiGridAlt } from 'react-icons/bi';
import moment from 'moment';
import Swal from 'sweetalert2';
import Language from '../components/Languages';
import { t } from '../utils';

import { COLORS } from '../constants';
import { clearAccount } from '../redux/auth/reducer';
import { StyledApp } from './App.style';

const { Content, Sider } = Layout;
function App(props) {
  const dispatch = useDispatch();
  const { token, firstName } = useSelector(state => state.account);
  console.log(token)
  const location = useLocation();
  const currentActiveNavLink = location.pathname.split('/').filter(i => i)[0];
  console.log(currentActiveNavLink)
  const handleLogOut = async () => {
    Swal.fire({
      title: t("Tizimdan chiqish"),
      confirmButtonText: t("Tasdiqlash"),
      cancelButtonText: t("Bekor qilish"),
      text: t("Tizimdan chiqishni tasdiqlaysizmi?"),
      cancelButtonColor: '#E7E9EB',
      confirmButtonColor: COLORS.black,
      showCancelButton: true,
      customClass: 'swal-danger',
    }).then(async ({ value }) => {
      if (value) {
        dispatch(clearAccount());
      }
    })
  };

  // if (!token) {
  //   return <h1>Login</h1>
  // }
  return (
    <StyledApp>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="80"
          className="custom-sidebar br-1"
          width="250"
        >
          <div className="sidebar-inner-wrapper">
            <a href="/profile" className="profile">
              <div className="profile-image mb-2">
                <img src={'imageProfile'} alt="Profile" />
              </div>
              <h4>{firstName}</h4>
            </a>
            <Divider style={{ margin: '3px 5px' }} />
            <Menu mode="inline" id="sidebar-menu" selectedKeys={[`/${currentActiveNavLink}/`]}>
              {/* <Menu.Item key="search" className="sidebar-item" icon={<IconSearch />}>
              <NavLink to='/#search'>{t('Qidiruv')}</NavLink>
            </Menu.Item> */}
              <Menu.Item key="/dashboard/" className="sidebar-item" icon={<BiGroup />}>
                <NavLink to="/dashboard"> {t('Asosiy')}</NavLink>
              </Menu.Item>
              <Menu.Item key="/statistics/" className="sidebar-item" icon={<BiGroup />}>
                <NavLink to="/statistics">{t('YTH statistikasi')}</NavLink>
              </Menu.Item>
              <Menu.Item key="/cards/" className="sidebar-item" icon={<BiGroup />}>
                <NavLink to="/cards">{t('YTH kartochkasi')}</NavLink>
              </Menu.Item>
              <Menu.Item key="/handbooks/" className="sidebar-item" icon={<BiBookAlt />}>
                <NavLink to="/handbooks">{t("Ma'lumotnomalar")}</NavLink>
              </Menu.Item>

              <Menu.Item key="logout" onClick={handleLogOut} className="sidebar-item" icon={<BiLogOut />}>
                <NavLink to="#">{t("Chiqish")}</NavLink>
              </Menu.Item>
            </Menu>
          </div>
          <Language />
        </Sider>

        <Layout id="main">
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 'calc(100vh - 48px)' }}>
              {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledApp>
  );
}

export default App;