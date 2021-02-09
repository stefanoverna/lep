import PropTypes from "prop-types";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import NavLink from "@/components/NavLink";
import navShop from "@/data/navShop.json";
import navLearn from "@/data/navLearn.json";
import navConsult from "@/data/navConsult.json";

const NavList = ({ data }) => (
  <Box w={5 / 6}>
    <VStack
      divider={<StackDivider borderColor="black" />}
      spacing={4}
      align="stretch"
    >
      {data.map((item) => (
        <NavLink key={item.link} href={item.link}>
          {item.label}
        </NavLink>
      ))}
    </VStack>
  </Box>
);
NavList.propTypes = {
  data: PropTypes.array.isRequired,
};

const NavTabs = ({ defaultIndex = 0 }) => {
  return (
    <Tabs variant="mainmenu" size="buttonMd" defaultIndex={defaultIndex}>
      <TabList>
        <Tab>Shop</Tab>
        <Tab>Learn</Tab>
        <Tab>Consult</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <NavList data={navShop}></NavList>
        </TabPanel>
        <TabPanel>
          <NavList data={navLearn}></NavList>
        </TabPanel>
        <TabPanel>
          <NavList data={navConsult}></NavList>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

NavTabs.propTypes = {
  defaultIndex: PropTypes.number,
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     label: PropTypes.string,
  //     link: PropTypes.string,
  //   })
  // ),
};

export default NavTabs;
