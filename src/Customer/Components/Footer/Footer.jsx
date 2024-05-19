import { Grid, Link, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      color={"white"}
      sx={{ bgcolor: "black", color: "white", py: 3}}
    >
      <Grid sx={{textAlign:"left",paddingLeft:"1rem"}} item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <LocationOnIcon/> Near Ram Dulari Mandap, Hari nagar, Jal nigam road, Balaganj, Lucknow 226003
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <EmailIcon/> kavitaboutique@gmail.com
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <LocalPhoneIcon/> +918340557798
        </Typography>
      </Grid>
      <Grid sx={{textAlign:"left",paddingLeft:"3rem"}} item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Store
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Products
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Custom Products
        </Typography>
      </Grid>
      <Grid sx={{textAlign:"left",paddingLeft:"1rem"}} item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Claim
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Terms
        </Typography>
      </Grid>
      <Grid sx={{textAlign:"left",paddingRight:"1rem"}} item xs={12} sm={6} md={3}>
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want product news and updates?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Subscribe to our newsletter.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Grid>

      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 KAVITA BOUTIQUE. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Developer - Anmol Kumar Soni
        </Typography>
        <Typography variant="body2" component="p" align="center">
          contact email{" - "}
          <Link
            href="#"
            color="inherit"
            underline="always"
          >
            anmolsoni7910@gmail.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
