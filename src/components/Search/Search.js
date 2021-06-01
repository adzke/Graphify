import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    marginTop: 15,
    
    
    "&:hover .MuiInputLabel-root": {
      color: theme.palette.text.primary,
      
    },
    "& .Mui-focused.MuiInputLabel-root": {
      color: theme.palette.primary.main,
      
    }
  },
  outlinedInput: {
    borderRadius: 20,
    "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.text.primary,
     
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.primary.main
    }
  }
}));

export default function Search(props) {
  const classes = useStyles();
  const [searchspace, SetSearchSpace] = React.useState(250);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleOpen = event => {
    SetSearchSpace(450)
    

  }
  const handleClose= event => {
    SetSearchSpace(250)
    

  }

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          style={{width: searchspace,  transition: 'width 0.3s'}}
          
        >
      
          <OutlinedInput
            id="outlined-adornment-password"
            placeholder={props.title}
            value={props.value}
            onChange={props.searchresults}
            className={classes.outlinedInput}
            notched={false}
            onFocus={handleOpen}
            onBlur={handleClose}
            endAdornment={
              <InputAdornment position="end">
                
                  <SearchIcon/>
                
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
    </div>
  );
}