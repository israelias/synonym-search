import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Launcher from '../shared/launcher';
import BackToTop from '../actions/scroll.button';
import Saves from '../saves/saves';
import View from './view';
import Info from '../info/info';
import Header from './header';
import Footer from './footer';
import { useDispatchTheme } from '../../context/theme.context';
import { TabPanel } from '../../helpers/views.helper';
import { useStyles } from '../../styles/layout.styles';
import Speed from '../fab/speed';

const Layout = ({
  children,
  searchText,
  loading,
  onSearchTextChange,
}) => {
  const classes = useStyles();
  const { value, hasSession, root } = useDispatchTheme();
  const description = `Search results for ${searchText}.`;

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={searchText} />
      </Head>
      {/* {(!hasSession || root.length === 0) && <Launcher />} */}
      <Header>
        <View
          loading={loading}
          onSearchTextChange={onSearchTextChange}
          searchText={searchText}
        />
        <Toolbar />
      </Header>
      <main className={classes.main}>
        <Toolbar id="back-to-top-anchor" />
        <TabPanel value={value} index="info">
          <Info />
        </TabPanel>
        <TabPanel value={value} index="search">
          {children}
        </TabPanel>
        <TabPanel value={value} index="saves">
          <Saves />
        </TabPanel>
      </main>
      <nav>
        <Speed
          loading={loading}
          onSearchTextChange={onSearchTextChange}
          searchText={searchText}
        />
        <BackToTop />
      </nav>
      <Footer>
        <Typography
          className={classes.searchText}
          component="h5"
          variant="subtitle2"
          noWrap
        >
          /{searchText}
        </Typography>
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  searchText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default Layout;
