import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SortOrders = (props:{ handleSort:()=>any, sort:boolean }) => {
    return (
      <Box
        onClick={() =>props.handleSort()}
        sx={{ display: "flex", gap: 2, direction: "ltr" }}
      >
        <Typography>سفارش ها </Typography>
        {props.sort ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </Box>
    );
  };
  export default SortOrders;