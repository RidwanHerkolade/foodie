import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: "$",
    label: '',
  },
  {
    value: "$",
    label: '',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ width:"90%" }}>
      <Slider
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        sx={{
            "& .MuiSlider-rail": {
                color: "rgb(255,172,28)", 
              backgroundColor: "rgb(255,172,28)", 
              height: "0.5rem",
              
            },
            "& .MuiSlider-track": {
                backgroundColor: "rgb(255,172,28)",
              height: "0.5rem",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "rgb(255,172,28)", 
            },
          }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: 'pointer',  fontFamily: "Monda",
            fontWeight: "500",
            fontSize: "1.0rem", }}
        >
          {MIN} $
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: 'pointer',  fontFamily: "Monda",
            fontWeight: "500",
            fontSize: "1.2rem", }}
         
        >
          {MAX} $
        </Typography>
      </Box>
    </Box>
  );
}
