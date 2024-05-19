import React from 'react'

const HomeAddressCard = () => {
  return (
    <div className='w-full'>
        <address className='font-bold mt-6 text-2xl text-center text-gray-600'>
            Near Ram Dulari Mandap, Hari Nagar <br/>
            Jal Nigam Road, Balaganj, Lucknow, 226003
        </address>
        <div className='h-full w-full my-4'>
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.41521797494855!2d80.88755607448039!3d26.883065771779698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995521de91acb9%3A0x7f24ac491a07064f!2sKavita%20Boutique!5e0!3m2!1sen!2sin!4v1715940773387!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default HomeAddressCard