import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    transform: "scale(1.2)",
    color: '#f62a4f',
    '&$checked': {
      color: '#f62a4f',
    },
    '&:hover': {
      color: props => props.checked ? '#831327':"#f85f7b",
    },
    "&:hover .MuiIconButton-label:after": {
      content: '""',
      left: 14,
      top: 14,
      height: 14,
      width: 14,
      position: "absolute",
      backgroundColor: props => props.checked ? "" : "#ffc1cc",
    },
    '&$disabled': {
      color: '#831327',
    },
  },
});