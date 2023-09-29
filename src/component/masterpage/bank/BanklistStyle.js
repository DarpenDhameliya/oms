import { makeStyles } from "@material-ui/styles";

const useStylesBank = makeStyles((theme) => ({
  setcontainer: {
    maxWidth: "100% !important",
    minHeight: "100vh",
    overflow: 'hidden',
    position: "relative",
    zIndex: 1,
    backgroundColor: "#f9fafc",
    paddingTop: "80px",
    paddingBottom:'30px !important '
  },
  setheading: {
    padding: "5px",
    margin: "0 !important",
    color: "#202223",
    fontWeight: "600 !important",
    fontSize: "35px !important",
    lineHeight: "32px",
    fontFamily: ["Poppins", "sans-serif", "!important"],
  },
  setpageheading: {
    maxWidth: "100% !important",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f9fafc",

  },
  setproductbtn: {
    fontWeight: 600,
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    color: "white",
    height:'40px',
    marginTop: '6px',
    "&:hover": { backgroundColor: "#3c8dbc !important" },
  },
  setProductpaper: {
    textAlign: "left",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "1500px",
    borderRadius: "10px",
    marginTop: "30px",
  },
  // setinputlayout: {
  //   display: "grid",
  // },
  setlabel: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontSize: "15px !important",
    lineHeight: "21px !important",
    marginTop: "15px !important",
    marginRight: "10px !important",
    marginBottom: "2px !important",
    fontWeight: '600 !important',
  },
  setsendbutton: {
    display: "flex",
    justifyContent: "end",
    marginTop: '15px'

  },
  setsendbtninside: {
    height: "40px",
    fontWeight: "600 !important",
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbccc  !important" },
  },
  setstateclear:{
    height: "40px",
    fontWeight: "600 !important",
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    color: "white",
    marginRight:'15px !important',
    "&:hover": { backgroundColor: "#3c8dbccc  !important" },
  },
  tableth:{
    padding:'8px !important',
    fontWeight: '600 !important',
    color:'#353535 !important',
    fontFamily:["Poppins", "sans-serif", "!important"],
  },
  tablethaction:{
    // width: '75px',
    padding:'8px !important',
    fontWeight: '600 !important',
    color:'#353535 !important',
    fontFamily:["Poppins", "sans-serif", "!important"],
  },
  tabletd:{
    fontFamily:["Poppins", "sans-serif", "!important"],
    padding:'8px !important',
    color:'#202223 !important'
  },
  tabletdicon:{
    // display:'flex !important',
    fontFamily:["Poppins", "sans-serif", "!important"],
    padding:'8px !important',
    color:'#202223 !important'
  },
  seteditincon:{
    color:'#353535',
    "&:hover": { color: "#3c8dbc !important" , backgroundColor: "#d6efef6e"},
  },
  setdeleteincon:{
    color:'#353535',
    // marginRight:'-15px',
    "&:hover": { color: "#7f2121 !important" , backgroundColor: "antiquewhite"},
  },
  setmodeldisplay: {
    position: "absolute",
    height: "130px",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white !important",
    boxShadow: `${theme.shadows[8]}`,
    borderRadius: "9px !important",
    padding: 10,
  },
  deletebtn: {
    fontWeight: 600,
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#931d1d",
    color: "white",
    "&:hover": { backgroundColor: "#931d1d !important" },
  },
  canclebtn:{
    fontWeight: 600,
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    marginRight:'5px',
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbc !important" },
  },
  setbtndeldiv: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "5px",
  },
  setinputdiv:{
    display:'flex',
  },
  // settable:{
  //   display:'scroll '
  // },
  seticondiv:{
    display:'flex'
  },
  setmodeldisplay: {
    position: "absolute",
    height: "150px",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white !important",
    boxShadow: `${theme.shadows[8]}`,
    borderRadius: "9px !important",
    padding: 10,
  },
  deletebtn: {
    fontWeight: 600,
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#931d1d",
    color: "white",
    "&:hover": { backgroundColor: "#931d1d !important" },
  },
  canclebtn:{
    fontWeight: 600,
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    marginRight:'5px',
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbc !important" },
  },
  seterrorlabel: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontSize: "15px !important",
    lineHeight: "21px !important",
    marginTop: "7px !important",
    marginRight: "10px",
    color: "#7f2121",
    marginBottom: "20px !important",
    fontWeight: "600 !important",
  },
  settextfield: {
    '& .MuiInputBase-root':{
      fontFamily: ["Poppins", "sans-serif", "!important"],
    },
    "&:hover": { boxShadow: `${theme.shadows[3]}`, border: 0 },
  },
}))
export default useStylesBank;
