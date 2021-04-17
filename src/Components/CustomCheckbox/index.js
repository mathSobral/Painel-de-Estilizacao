import { Checkbox } from '@material-ui/core';
import {useStyles} from './styles';

const CustomCheckbox = (props) => {
  const classes = useStyles(props);

  return <Checkbox color="default" className={classes.root} {...props}/>;
}

export default CustomCheckbox;


