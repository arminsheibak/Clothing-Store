import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useCartStore from "../store";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { shades } from "../theme";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

interface FormData {
  first_name: string;
  last_name: string;
  country: string;
  street_address: string;
  street_address_2?: string;
  state: string;
  city: string;
  zip_code: string;
  email: string;
  phone: string;
}

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [activeStep, setActiveStep] = useState(0);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const cart = useCartStore((s) => s.cart);
  const navigate = useNavigate();
  const flushCart = useCartStore((s) => s.flushCart);
  const isFirstStep = activeStep == 0;
  const isSecondStep = activeStep == 1;

  

  const onSubmit = (data: FieldValues) => {
    if (activeStep == 1) {
      apiClient.post('/api/orders/', {shipping_info : data , order_items: {...cart} });
      flushCart();
      navigate('/confirmation')
    }
    setActiveStep(activeStep + 1);

    };

  return (
    <Box width="80%" margin="100px auto">
      {/* Stepper */}
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Shipping Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      {/* Form */}
      <Box marginTop="40px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isFirstStep && (
            <Box
              display="grid"
              gap="15px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                type="text"
                label="First Name"
                {...register("first_name", {
                  required: "first name is required!",
                })}
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                {...register("last_name", {
                  required: "last name is required!",
                })}
                type="text"
                label="Last Name"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Country"
                {...register("country", { required: "country is required!" })}
                error={!!errors.country}
                helperText={errors.country?.message}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Street Address"
                {...register("street_address", {
                  required: "street address is required!",
                })}
                error={!!errors.street_address}
                helperText={errors.street_address?.message}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                {...register("street_address_2")}
                type="text"
                label="Street Address 2 (optional)"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                {...register("city", { required: "city is required!" })}
                type="text"
                label="City"
                error={!!errors.city}
                helperText={errors.city?.message}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="State"
                {...register("state", { required: "state is required!" })}
                error={!!errors.state}
                helperText={errors.state?.message}
                sx={{ gridColumn: "1fr" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Zip Code"
                {...register("zip_code", { required: "zip code is required!" })}
                error={!!errors.state}
                helperText={errors.state?.message}
                sx={{ gridColumn: "1fr" }}
              />
            </Box>
          )}
          {isSecondStep && (
            <Box m="30px 0">
              {/* CONTACT INFO */}
              <Box>
                <Typography sx={{ mb: "15px" }} fontSize="18px">
                  Contact Info
                </Typography>
                <TextField
                  fullWidth
                  {...register('email', {required: 'Email is required'})}
                  type="text"
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{ gridColumn: "span 4", marginBottom: "15px" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Phone Number"
                  {...register('phone', {required: 'Phone Number is required'})}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
            </Box>
          )}
          <Box display="flex" justifyContent="space-between" gap="50px">
            {!isFirstStep && (
              <Button
                fullWidth
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: shades.primary[200],
                  boxShadow: "none",
                  color: "white",
                  borderRadius: 0,
                  padding: "15px 40px",
                  mt: "30px",
                }}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Back
              </Button>
            )}
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                backgroundColor: shades.primary[400],
                boxShadow: "none",
                color: "white",
                borderRadius: 0,
                padding: "15px 40px",
                mt: "30px",
              }}
            >
              {!isSecondStep ? "Next" : "Place Order"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Checkout;
