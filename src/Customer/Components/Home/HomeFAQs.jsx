import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function HomeFAQs() {
  return (
    <div className='max-w-2xl lg:max-w-7xl p-4 lg:p-8 bg-gray-100 rounded-2xl'>
      <div className='w-full text-center py-8 flex flex-col items-center'>
        <h2 className='text-4xl font-semibold'>FAQs
          <hr className='w-[20rem]'/>
        </h2>
      </div>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color: "black"}}>What is Kavita Boutique, and what do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Kavita Boutique is a premier online destination for ethnic wear. We offer a wide range of traditional and contemporary Indian attire, including sarees, salwar kameez, lehengas, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color: "black", fontSize:"bold"}}>How can I place an order on Kavita Boutique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ordering with Kavita Boutique is easy! Simply browse our collection, select your favourite items, and add them to your cart. Follow the checkout process to place your order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color:"black"}}>What payment methods are accepted on Kavita Boutique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We accept payments via VISA/MASTER credit and debit cards, UPI and cash on delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color:"black"}}>What is your return and exchange policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are committed to maintaining a long-lasting relationship with our customers by providing them with 100% satisfaction. If you are unsatisfied with your purchase for any reason, we will take back the product. We have a generous 7-day no-questions-asked return policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color: "black"}}>Can i find the latest fashion trends on kavita boutique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolutely! We are committed to staying up-to-date with the latest fashion trends. You can explore a range of contemporary and traditional styles on our platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"transparent",outline:"none",border:"none",boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{color:"black"}}>How i give measurement for custom clothes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Body shape changes over time and seasonally. So it is advised to visit the shop to give your measurements for your custom clothes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
