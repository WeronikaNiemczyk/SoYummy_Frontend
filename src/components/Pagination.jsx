// // src/components/Pagination.jsx

import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  "& .MuiButtonBase-root": {
    borderRadius: "50%",
    width: 40,
    height: 40,
    margin: theme.spacing(0, 0.5),
    color: "#7d9a5b",
    backgroundColor: "#e6e6e6",
  },
  "& .MuiButtonBase-root.Mui-selected": {
    backgroundColor: "#e6f4d4",
    color: "#7d9a5b",
    fontWeight: "bold",
  },
  "& .MuiButtonBase-root:hover": {
    backgroundColor: "#e6f4d4",
  },
  "& .MuiPaginationItem-ellipsis": {
    color: "#7d9a5b",
  },
}));

export default CustomPagination;
