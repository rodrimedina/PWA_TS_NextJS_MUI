import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Plan } from "../../types/Plan";
import CardPlanSection from "./CardPlanSection";

const PlansSection = ({ plans }: { plans: Plan[] }) => {
  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {plans.map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <CardPlanSection item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default PlansSection;
