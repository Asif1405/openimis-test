import { createTheme, AppBar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core/Drawer';
import { alpha } from "@material-ui/core/styles/colorManipulator";
import { interfont } from "@fontsource/inter";
const theme = createTheme({
  overrides: {
    MuiTableRow: {
      root: {
        "&$selected": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#fff" },
    error: { main: "#801a00" },
    text: {
      primary: "#000000",
      secondary: "#000000", // HACK FOR material-table hardcoded toolbar!,
      second: "#fff",
      error: "#801a00",
    },
    toggledButton: "#999999",
  },
  typography: {
    useNextVariants: true,
    fontFamily: [interfont, "Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    title: {
      fontSize: 20,
      fontWeight: 300,
    },
    label: {
      color: "black",
    },
  },
  jrnlDrawer: {
    open: {
      width: 500,
    },
    close: {
      width: 80,
    },
    itemDetail: {
      marginLeft: 8,
    },
    iconSize: 24,
  },
  menu: {
    variant: "AppBar",
    drawer: {
      width: 300,
      fontSize: 16,
    },
  appBar: {
    position: 'absolute',
    marginLeft: 300,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${300}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 300,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  },
  page: {
    padding: 16,
    locked: {
      background: "repeating-linear-gradient(45deg, #D3D3D3 1px, #D3D3D3 1px, #fff 10px, #fff 10px);",
    },
  },
  paper: {
    paper: {
      margin: 10,
      backgroundColor: "#dbeef0",
    },
    header: {
      color: "#000000",
      backgroundColor: "#FFFFFF",
    },
    message: {
      backgroundColor: "#b7d4d8",
    },
    title: {
      padding: 10,
      fontSize: 24,
      color: "#000000",
      backgroundColor: "#F48943",
    },
    action: {
      padding: 5,
    },
    divider: {
      padding: 0,
      margin: 0,
    },
    body: {
      marginTop: 10,
      backgroundColor: "#dbeef0",
    },
    item: {
      padding: 10,
    },
  },
  table: {
    title: {
      padding: 10,
      fontWeight: 500,
      color: "#006273",
      backgroundColor: "#b7d4d8",
    },
    header: {
      color: "#006273",
    },
    headerAction: {
      padding: 5,
    },
    row: {
      color: "#006273",
      align: "center",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.12) !important",
      },
    },
    cell: {
      padding: 5,
    },
    lockedRow: {
      background: "repeating-linear-gradient(45deg, #D3D3D3 1px, #D3D3D3 1px, #fff 10px, #fff 10px);",
    },
    lockedCell: {},
    highlightedRow: {},
    highlightedCell: {
      fontWeight: 500,
      align: "center",
    },
    highlightedAltRow: {},
    highlightedAltCell: {
      fontStyle: "italic",
      align: "center",
    },
    disabledRow: {},
    disabledCell: {
      // textDecoration: "line-through",
      color: "grey",
      align: "center",
    },
    footer: {
      color: "#006273",
    },
    pager: {
      color: "#006273",
    },
  },
  form: {
    spacing: 10,
  },
  formTable: {
    table: {
      color: "#006273",
    },
    actions: {
      color: "#006273",
    },
    header: {
      color: "#006273",
      align: "center",
    },
  },
  dialog: {
    title: {
      fontWeight: 500,
      color: "grey",
    },
    content: {
      padding: 0,
    },
    primaryButton: {
      backgroundColor: "#006273",
      color: "#fff",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: alpha("#006273", 0.5),
        color: "#006273",
      },
    },
    secondaryButton: {},
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 8,
    zIndex: 2000,
  },
  fakeInput: {},
  bigAvatar: {
    width: 160,
    height: 160,
  },
});

export default theme;
