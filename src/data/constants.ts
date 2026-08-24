export const BUSINESS_INFO = {
  name: 'Eswari Organic Store',
  tagline: 'Pure. Natural. Organic.',
  badge: 'PURE • NATURAL • HEALTHY',
  supportingText: 'Healthy organic foods for a better everyday life.',
  location: 'Madurai, Tamil Nadu, India',
  locationShort: 'Madurai, Tamil Nadu',
  phone: '9597418168',
  phoneFormatted: '+91 9597418168',
  phoneUrl: 'tel:+919597418168',
  email: 'eswaribca09@gmail.com',
  emailUrl: 'mailto:eswaribca09@gmail.com',
  whatsappNumber: '919597418168',
  whatsappUrl: 'https://wa.me/919597418168',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125747.77366308253!2d78.0463953531602!3d9.925200685935048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.google.com/?q=Madurai,+Tamil+Nadu,+India',
  year: '2026',
  disclaimer: 'Prices are subject to change. Please confirm current price and availability with Eswari Organic Store.'
};

export const getWhatsAppEnquiryUrl = (productName?: string, quantity?: string): string => {
  if (!productName) {
    return 'https://wa.me/919597418168?text=' + encodeURIComponent('Hello Eswari Organic Store, I would like to enquire about your organic food products.');
  }
  const qtyString = quantity ? ` ${quantity}` : '';
  const message = `Hello Eswari Organic Store, I would like to enquire about ${productName}${qtyString}.`;
  return `https://wa.me/919597418168?text=${encodeURIComponent(message)}`;
};
